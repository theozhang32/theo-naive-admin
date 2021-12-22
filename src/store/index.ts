import type { App } from 'vue';
import { createPinia } from 'pinia';

export { useUserStore, setupUser } from './modules/user';
export { useLayoutStore } from './modules/layout';

export const pinia = createPinia();

export function setupStore(app: App) {
  app.use(pinia);
}
