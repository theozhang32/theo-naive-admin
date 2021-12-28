<script setup lang="ts">
  import { isReactive, toRaw, unref, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';
  import { AppProvider } from '@/components/AppProvider';
  import { useLayoutStore } from '@/store';
  import { useReload } from '@/hooks';
  import bus from '@/utils/bus';

  const route = useRoute();
  const layoutStore = useLayoutStore();

  useReload();

  watchEffect(() => {
    console.log(layoutStore.routeRecord);
  });
</script>

<template>
  <n-config-provider class="h-full">
    <AppProvider>
      <router-view :key="layoutStore.routeViewKey"></router-view>
    </AppProvider>
  </n-config-provider>
</template>

<style>
  html,
  body,
  #app {
    height: 100%;
    overflow: hidden;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
