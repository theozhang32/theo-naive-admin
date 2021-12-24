<script setup lang="ts">
  const props = defineProps<{ tooltip?: string; innerClass?: string }>();
  const emit = defineEmits(['click']);
  const onClick = () => {
    emit('click');
  };
</script>

<template>
  <NTooltip v-if="tooltip" :show-arrow="false" :style="{ fontSize: '10px', padding: '2px 4px' }">
    <template #trigger>
      <NIcon
        size="24"
        class="cursor-pointer transition-transform transform hover:scale-105"
        :class="innerClass"
        @click="onClick"
      >
        <slot />
      </NIcon>
    </template>
    {{ tooltip }}
  </NTooltip>
  <NIcon
    v-else
    size="24"
    class="cursor-pointer transition-transform transform hover:scale-105"
    :class="innerClass"
    @click="onClick"
  >
    <slot />
  </NIcon>
</template>
