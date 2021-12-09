<script lang="ts">
  export default {
    name: 'ContainerLayout',
  };
</script>

<script setup lang="ts">
  interface Props {
    keepAlive?: boolean;
    include?: string | RegExp | string[];
    exclude?: string | RegExp | string[];
    max?: number | string;
  }

  withDefaults(defineProps<Props>(), {
    keepAlive: false,
    include: (): string[] => [],
    exclude: (): string[] => [],
    max: Infinity,
  });
</script>

<template>
  <keep-alive v-if="keepAlive" :include="include" :exclude="exclude" :max="max">
    <router-view></router-view>
  </keep-alive>
  <router-view v-else></router-view>
</template>
