import type { RouteRecordRaw } from 'vue-router';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('@/pages/error/403.vue'),
    meta: {
      title: '403 Forbidden',
    },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/pages/error/404.vue'),
    meta: {
      title: '404 Not Found',
    },
  },
];

export const fallbackRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  redirect: { name: 'NotFound' },
};
