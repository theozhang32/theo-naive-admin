<script lang="ts">
  import { defineComponent } from '@vue/runtime-core';
  import { AppProvider } from '@/components/AppProvider';

  export default defineComponent({
    components: {
      AppProvider: [AppProvider.name],
    },
  });
</script>

<template>
  <n-config-provider>
    <app-provider>
      <n-button>Click Me</n-button>
    </app-provider>
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
