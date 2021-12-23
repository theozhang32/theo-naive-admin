<script lang="ts">
  export default {
    name: 'AppLogo',
  };
</script>

<script setup lang="ts">
  import { useLayoutStore } from '@/store';
  import { computed } from 'vue';
  const layoutStore = useLayoutStore();
  const computedLogoClass = computed(() => {
    if (!layoutStore.appSiderCollapsed) {
      return ['mr-1'];
    }
    return ['w-8', 'h-8'];
  });
</script>

<template>
  <div class="h-16 flex items-center justify-center">
    <img
      class="w-6 h-6 transition-all duration-300"
      :class="computedLogoClass"
      src="https://www.naiveui.com/assets/naivelogo.93278402.svg"
    />
    <span
      class="transition-all duration-300 overflow-hidden text-lg font-semibold"
      :class="{ 'max-w-0': layoutStore.appSiderCollapsed }"
      >TheoNaiveAdmin</span
    >
  </div>
</template>
