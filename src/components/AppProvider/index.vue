<script lang="ts">
  import { defineComponent } from 'vue';
  import {
    NDialogProvider,
    NNotificationProvider,
    NMessageProvider,
    NLoadingBarProvider,
  } from 'naive-ui';

  export default defineComponent({
    name: 'AppProvider',
    components: {
      NDialogProvider,
      NNotificationProvider,
      NMessageProvider,
      NLoadingBarProvider,
    },
  });
</script>

<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <slot />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>
