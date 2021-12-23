<script setup lang="ts">
  const emit = defineEmits(['click']);
  const onClick = () => {
    emit('click');
  };
</script>

<template>
  <NIcon
    size="24"
    class="cursor-pointer transition-transform transform hover:scale-105"
    @click="onClick"
  >
    <slot />
  </NIcon>
</template>
