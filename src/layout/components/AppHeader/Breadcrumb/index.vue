<script setup lang="ts">
  import type { DropdownOption } from 'naive-ui';
  import type { RouteLocationMatched, RouteMeta } from 'vue-router';
  import { h, resolveComponent, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const matched = computed(() => route.matched);
  const getBreadcrumbName: <T extends { meta?: RouteMeta }>(m: T) => string = (m) =>
    m.meta!.breadcrumbName || m.meta!.title;
  const getBreadcrumbOptions = (m: RouteLocationMatched) =>
    m.children.map((route) => ({
      key: route.path,
      name: route.name,
      label: getBreadcrumbName(route),
    }));
  const onDropdownSelect = (key: string, option: DropdownOption) => {
    if (route.name === option.name) return;
    router.push({ path: key });
  };
</script>

<template>
  <NBreadcrumb :style="{ '--font-size': '16px' }">
    <NBreadcrumbItem v-for="m in matched" :key="m.path">
      <NDropdown
        v-if="m.redirect && m.children.length > 0"
        trigger="click"
        :options="getBreadcrumbOptions(m)"
        @select="onDropdownSelect"
        >{{ getBreadcrumbName(m) }}</NDropdown
      >
      <strong v-else class="font-semibold">{{ getBreadcrumbName(m) }}</strong>
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>
