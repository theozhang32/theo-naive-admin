import type { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { constantRoutes } from './constantRoutes';
import { addDynamicRoutes } from './addDynamicRoutes';
import { createDynamicMenus } from './createDynamicMenus';
import { createRouterGuards } from './guards';

export const router = createRouter({
  strict: true,
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
});

export function setupRouter(app: App) {
  createDynamicMenus();
  addDynamicRoutes(router);
  createRouterGuards(router);
  app.use(router);
}
