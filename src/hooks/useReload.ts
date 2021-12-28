import { watch } from 'vue';
import { useLayoutStore } from '@/store';
import bus from '@/utils/bus';

export function useReload() {
  const layoutStore = useLayoutStore();
  watch(
    () => layoutStore.routeViewKey,
    () => {
      setTimeout(() => {
        bus.$loadingBar.finish();
      }, 500);
    }
  );
}
