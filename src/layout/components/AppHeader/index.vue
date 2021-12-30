<script lang="ts">
  export default {
    name: 'AppHeader',
  };
</script>

<script setup lang="ts">
  import { nextTick } from 'vue';
  import {
    ArrowLeftOutlined,
    ReloadOutlined,
    SearchOutlined,
    LockOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined,
  } from '@vicons/antd';
  import { useRoute, useRouter } from 'vue-router';
  import { useLayoutStore } from '@/store';
  import bus from '@/utils/bus';
  import { HeaderIcon } from './HeaderIcon';
  import { HeaderAvatar } from './Avatar';
  import { HeaderBreadcrumb } from './Breadcrumb';

  const router = useRouter();
  const route = useRoute();
  const layoutStore = useLayoutStore();

  const onReload = () => {
    bus.$loadingBar.start();
    layoutStore.routeViewKey = Date.now();
  };

  const onToggleScreen = () => {
    if (document.fullscreenElement) {
      layoutStore.isFullScreen = false;
      document.exitFullscreen();
    } else {
      layoutStore.isFullScreen = true;
      document.documentElement.requestFullscreen();
    }
  };
</script>

<template>
  <div class="h-16 px-3 flex items-center shadow">
    <HeaderBreadcrumb />
    <div class="flex-1 flex items-center justify-end">
      <HeaderIcon
        tooltip="返回上一页"
        @click="
          () => {
            router.back();
          }
        "
        ><ArrowLeftOutlined
      /></HeaderIcon>
      <HeaderIcon inner-class="ml-4" tooltip="刷新" @click="onReload">
        <ReloadOutlined />
      </HeaderIcon>
      <HeaderIcon inner-class="ml-4" tooltip="搜索">
        <SearchOutlined />
      </HeaderIcon>
      <HeaderIcon inner-class="ml-4" tooltip="锁屏">
        <LockOutlined />
      </HeaderIcon>
      <HeaderIcon inner-class="ml-4" tooltip="全屏" @click="onToggleScreen">
        <FullscreenExitOutlined v-if="layoutStore.isFullScreen" />
        <FullscreenOutlined v-else />
      </HeaderIcon>
      <HeaderAvatar class="ml-4" />
    </div>
  </div>
</template>
