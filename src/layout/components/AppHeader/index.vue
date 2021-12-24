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
  import { HeaderBreadcrumb } from './Breadcrumb';
</script>

<template>
  <div class="h-16 px-3 flex items-center shadow">
    <HeaderIcon tooltip="返回"><ArrowLeftOutlined /></HeaderIcon>
    <HeaderIcon inner-class="ml-3" tooltip="刷新">
      <ReloadOutlined />
    </HeaderIcon>
    <HeaderBreadcrumb class="ml-3" />
    <div class="flex-1 flex items-center justify-end">
      <HeaderIcon tooltip="搜索">
        <SearchOutlined />
      </HeaderIcon>
      <HeaderIcon inner-class="ml-4" tooltip="锁屏">
        <LockOutlined />
      </HeaderIcon>
      <HeaderIcon inner-class="ml-4" tooltip="全屏">
        <FullscreenOutlined />
      </HeaderIcon>
      <HeaderAvatar class="ml-4" />
    </div>
  </div>
</template>
