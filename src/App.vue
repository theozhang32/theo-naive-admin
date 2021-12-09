<script setup lang="ts">
  import { AppProvider } from '@/components/AppProvider';
</script>

<template>
  <n-config-provider>
    <AppProvider>
      <router-view></router-view>
    </AppProvider>
  </n-config-provider>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
