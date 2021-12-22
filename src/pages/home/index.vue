<script lang="ts">
  import { useRouter } from 'vue-router';
  import { useLayoutStore } from '@/store';

  export default {
    setup() {
      console.log('index setup');
      const layoutStore = useLayoutStore();
      const router = useRouter();
      if (layoutStore.dynamicRoutes.length > 0) {
        router.replace(layoutStore.dynamicRoutes[0]);
      } else {
        router.replace({ name: 'Forbidden' });
      }
      return () => null;
    },
  };
</script>
