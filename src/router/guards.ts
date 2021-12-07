import type { Router } from 'vue-router';
import bus from '@/utils/bus';

export function createRouterGuards(router: Router) {
  router.beforeEach(async (to, from) => {
    bus.$loadingBar.start();
  });

  router.afterEach((to, from, failure) => {
    bus.$loadingBar.finish();
  });

  router.onError((error) => {
    console.error(error);
  });
}
