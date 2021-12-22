import type { Router, RouteRecordRaw } from 'vue-router';
import { useUserStore, useLayoutStore } from '@/store';
import { generateTree, routeHasPermission } from './utils';
import { fallbackRoute } from './constantRoutes';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export function addDynamicRoutes(router: Router) {
  const userStore = useUserStore();
  const layoutStore = useLayoutStore();
  if (userStore.isLogin) {
    const dynamicRoutes = generateTree<RouteRecordRaw>(
      routeModuleList,
      userStore.permission,
      routeHasPermission
    );
    if (dynamicRoutes.length > 0) {
      layoutStore.dynamicRoutes = dynamicRoutes;
      dynamicRoutes.forEach((route) => {
        router.addRoute(route);
      });
    }
    // 别忘记fallback路由
    router.addRoute(fallbackRoute);
  }
}
