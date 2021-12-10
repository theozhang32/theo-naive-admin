import type {
  Router,
  RouteRecordRaw,
  RouteLocationNormalized,
  Permission,
  RouteRecordName,
} from 'vue-router';
import { isNavigationFailure } from 'vue-router';
import { pick, omitBy, isUndefined } from 'lodash-es';
import bus from '@/utils/bus';
import { constantRoutes, fallbackRoute } from './constantRoutes';
import { generateTree, routeHasPermission } from './utils';

// TODO mock 用store替换
const isLogin = false;
const permission: Permission = [];
const isDynamicRoutesAdded = true;
const keepAliveComponents: RouteRecordName[] = [];

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const constantRoutesName = constantRoutes.map((route) => route.name);

export function createRouterGuards(router: Router) {
  router.beforeEach((to, from) => {
    bus.$loadingBar.start();
    if (to.name && constantRoutesName.includes(to.name)) {
      return true;
    }
    if (!isLogin) {
      // 未登录：携带target地址跳转登录
      const next: {
        path?: string;
        name?: string;
        params?: Recordable<any>;
        query?: Recordable<any>;
        hash?: string;
      } = omitBy(pick(to, ['path', 'name', 'params', 'query', 'hash']), isUndefined);
      return {
        name: 'Login',
        replace: true,
        query: {
          redirect: JSON.stringify(next),
        },
      };
    } else {
      // 已登录
      if (isDynamicRoutesAdded) {
        // 进行过动态路由添加：直接跳转
        return true;
      } else {
        // 未进行过动态路由添加：根据全量路由树生成动态路由树并添加
        const dynamicRoutes = generateTree<RouteRecordRaw>(
          routeModuleList,
          permission,
          routeHasPermission
        );
        dynamicRoutes.forEach((route) => {
          router.addRoute(route);
        });
        // 别忘记fallback路由
        router.addRoute(fallbackRoute);
        // TODO set isDynamicRoutesAdded true
        return true;
      }
    }
  });

  router.afterEach((to, from, failure) => {
    bus.$loadingBar.finish();
    if (isNavigationFailure(failure)) {
      console.warn(failure);
    }
    toggleKeepAliveComponents(to);
  });

  router.onError((error) => {
    console.error(error);
  });
}

function setTitle(to: RouteLocationNormalized) {
  const { title } = to.meta;
  document.title = title ? title : import.meta.env.VITE_APP_TITLE;
}

function toggleKeepAliveComponents(to: RouteLocationNormalized) {
  const currentCompName = to.matched.find((item) => item.name === to.name)?.name;
  if (currentCompName && to.meta?.keepAlive && !keepAliveComponents.includes(currentCompName)) {
    keepAliveComponents.push(currentCompName);
  } else if (!to.meta?.keepAlive) {
    const index = keepAliveComponents.findIndex((name) => name === currentCompName);
    index > -1 && keepAliveComponents.splice(index, 1);
  }
  // TODO set keepAliveComponents
}
