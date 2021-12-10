<script setup lang="ts">
  import { AppProvider } from '@/components/AppProvider';
</script>

<template>
  <n-config-provider class="h-full">
    <AppProvider>
      <router-view></router-view>
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
