import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  strict: true,
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({
    left: 0,
    top: 0,
  }),
});

export function setupRouter(app: App) {
  app.use(router);
}
