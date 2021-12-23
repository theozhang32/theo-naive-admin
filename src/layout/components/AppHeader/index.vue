<script lang="ts">
  export default {
    name: 'AppHeader',
  };
</script>

<script setup lang="ts">
  import {
    ArrowLeftOutlined,
    ReloadOutlined,
    SearchOutlined,
    LockOutlined,
    FullscreenOutlined,
  } from '@vicons/antd';
  import { HeaderIcon } from './HeaderIcon';
  import { HeaderAvatar } from './Avatar';
</script>

<template>
  <div class="h-16 px-3 flex items-center shadow">
    <HeaderIcon>
      <ArrowLeftOutlined />
    </HeaderIcon>
    <HeaderIcon class="ml-3">
      <ReloadOutlined />
    </HeaderIcon>
    <div></div>
    <div class="flex-1 flex items-center justify-end">
      <HeaderIcon>
        <SearchOutlined />
      </HeaderIcon>
      <HeaderIcon class="ml-4">
        <LockOutlined />
      </HeaderIcon>
      <HeaderIcon class="ml-4">
        <FullscreenOutlined />
      </HeaderIcon>
      <HeaderAvatar class="ml-4" />
    </div>
  </div>
</template>
