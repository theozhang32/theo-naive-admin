<script lang="ts">
  import { ref, watchEffect } from 'vue';
  import { useLayoutStore } from '@/store';
  import { useRoute } from 'vue-router';
  export default {
    name: 'AppMenu',
  };
</script>

<script setup lang="ts">
  const route = useRoute();
  const layoutStore = useLayoutStore();
  const activeKey = ref<string | null>(null);

  console.log(layoutStore.formatMenus);

  watchEffect(() => {
    const route2menu = route.meta.menu;
    if (route2menu) {
      activeKey.value = route2menu;
    } else {
      activeKey.value = null;
    }
  });
</script>

<template>
  <div class="flex-1">
    <NMenu
      v-model:value="activeKey"
      :collapsed="layoutStore.appSiderCollapsed"
      :collapsed-width="64"
      :icon-size="20"
      :expand-icon-size="24"
      :options="layoutStore.formatMenus"
    />
  </div>
</template>
