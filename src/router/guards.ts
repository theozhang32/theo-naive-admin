import type { Router, RouteLocationNormalized } from 'vue-router';
import { isNavigationFailure } from 'vue-router';
import { pick, omitBy, isUndefined } from 'lodash-es';
import { useUserStore, useLayoutStore } from '@/store';
import bus from '@/utils/bus';
import { constantRoutes } from './constantRoutes';

const constantRoutesName = constantRoutes.filter((route) => route.name).map((route) => route.name);

export function createRouterGuards(router: Router) {
  router.beforeEach((to, from) => {
    const userStore = useUserStore();

    if (to.name && constantRoutesName.includes(to.name)) {
      return true;
    }
    if (!userStore.isLogin) {
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
          redirect: window.btoa(JSON.stringify(next)),
        },
      };
    } else {
      // 已登录
      return true;
    }
  });

  router.afterEach((to, from, failure) => {
    bus.$loadingBar.finish();
    setTitle(to);
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
  const layoutStore = useLayoutStore();
  layoutStore.$patch((state) => {
    const keepAliveComponents = state.keepAliveComponents;
    const currentCompName = to.matched.find((item) => item.name === to.name)?.name;
    if (currentCompName && to.meta?.keepAlive && !keepAliveComponents.includes(currentCompName)) {
      keepAliveComponents.push(currentCompName);
    } else if (!to.meta?.keepAlive) {
      const index = keepAliveComponents.findIndex((name) => name === currentCompName);
      index > -1 && keepAliveComponents.splice(index, 1);
    }
  });
}
