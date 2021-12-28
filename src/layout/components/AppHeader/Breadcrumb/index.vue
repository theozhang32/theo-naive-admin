<script setup lang="ts">
  import type { DropdownOption } from 'naive-ui';
  import type { RouteLocationMatched, RouteRecordRaw, RouteMeta } from 'vue-router';
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const matched = computed(() => route.matched);

  const getBreadcrumbName: <T extends { meta?: RouteMeta }>(m: T) => string = (m) =>
    m.meta!.breadcrumbName || m.meta!.title;
  const getBreadcrumbOptions = (
    m: RouteLocationMatched | RouteRecordRaw,
    absolutePath?: string
  ) => {
    if (!m.children) {
      return [];
    }
    const currentPath = absolutePath || m.path;

    const options = [];
    for (let r of m.children) {
      if (!r.meta || r.meta.notBreadcrumb) continue;
      const option: { key: string; label: string; children?: any } = {
        key: currentPath + (r.path ? `/${r.path}` : ''),
        label: getBreadcrumbName(r),
      };
      if (r.children && r.children.length > 0) {
        option.children = getBreadcrumbOptions(r, option.key);
      }
      options.push(option);
    }
    return options;
  };

  const onDropdownSelect = (key: string, option: DropdownOption) => {
    if (route.path === option.key) return;
    router.push({ path: key });
  };
</script>

<template>
  <NBreadcrumb :style="{ '--font-size': '16px' }">
    <NBreadcrumbItem v-for="m in matched" :key="m.path">
      <NDropdown
        v-if="m.children.length > 0"
        trigger="click"
        :options="getBreadcrumbOptions(m)"
        @select="onDropdownSelect"
        >{{ getBreadcrumbName(m) }}</NDropdown
      >
      <strong v-else class="font-semibold">{{ getBreadcrumbName(m) }}</strong>
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>
