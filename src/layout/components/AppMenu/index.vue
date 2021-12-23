<script lang="ts">
  export default {
    name: 'AppMenu',
  };
</script>

<script setup lang="ts">
  import type { MenuOption } from 'naive-ui';
  import { h, resolveComponent, ref, watchEffect } from 'vue';
  import { useLayoutStore } from '@/store';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const layoutStore = useLayoutStore();
  const activeKey = ref<string | null>(null);
  const menus = layoutStore.dynamicMenus as MenuOption[];

  // 批量渲染菜单
  const renderMenuLabel = (option: MenuOption) => {
    if (typeof option.path === 'string' && option.path) {
      return h(
        resolveComponent('router-link'),
        { to: { path: option.path } },
        () => option.label as string
      );
    }
    return option.label as string;
  };

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
      :expand-icon-size="24"
      :indent="24"
      :options="menus"
      :render-label="renderMenuLabel"
    />
  </div>
</template>
