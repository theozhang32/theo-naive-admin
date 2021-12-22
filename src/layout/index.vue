<script lang="ts">
  export default {
    name: 'BaseLayout',
  };
</script>

<script setup lang="ts">
  import { AppLogo } from './components/AppLogo';
  import { AppMenu } from './components/AppMenu';
  import { AppHeader } from './components/AppHeader';
  import { AppTabView } from './components/AppTabView';
  import { useLayoutStore } from '@/store';

  const layoutStore = useLayoutStore();
</script>

<template>
  <n-layout class="h-full" has-sider>
    <n-layout-sider
      class="h-full"
      content-style="display: flex; flex-direction: column; height: 100%;"
      show-trigger="bar"
      collapsed-mode="width"
      bordered
      :collapsed="layoutStore.appSiderCollapsed"
      :collapsed-width="64"
      :width="208"
      :native-scrollbar="false"
      @collapse="
        () => {
          layoutStore.appSiderCollapsed = true;
        }
      "
      @expand="
        () => {
          layoutStore.appSiderCollapsed = false;
        }
      "
    >
      <AppLogo />
      <AppMenu />
    </n-layout-sider>
    <n-layout>
      <n-layout-header class="z-10" position="absolute">
        <AppHeader />
        <AppTabView />
      </n-layout-header>
      <n-layout-content :native-scrollbar="false" class="h-full pt-24">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
