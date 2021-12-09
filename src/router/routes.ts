import type { RouteRecordRaw } from 'vue-router';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: routeModuleList[0].path,
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  ...routeModuleList,
  {
    path: '/403',
    name: 'Error403',
    component: () => import('@/pages/error/403.vue'),
    meta: {
      title: '403',
    },
  },
];

export default routes;
