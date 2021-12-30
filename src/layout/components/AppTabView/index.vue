<script lang="ts">
  export default {
    name: 'AppTabView',
  };
</script>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import Draggable from 'vuedraggable';
  import { useRoute, useRouter } from 'vue-router';
  import { isEqual, pick, omit } from 'lodash-es';
  import { CloseOutlined } from '@vicons/antd';
  import { RouteLocationWithMeta } from '@/types';
  import { useLayoutStore } from '@/store';

  const route = useRoute();
  const router = useRouter();
  const layoutStore = useLayoutStore();
  const localRouteRecord = computed({
    get: () => layoutStore.routeRecord,
    set: (val) => {
      layoutStore.routeRecord = val;
    },
  });
  const dragging = ref(false);

  const computedItemKey = (item: any) => {
    return JSON.stringify(item);
  };
  const isEqualRoute = (element: RouteLocationWithMeta) => {
    return isEqual(pick(route, ['path', 'name', 'params', 'query', 'hash', 'meta']), element);
  };
  const onTagClose = (element: RouteLocationWithMeta, index: number) => {
    if (isEqualRoute(element)) {
      let target;
      if (index === 0) {
        const len = localRouteRecord.value.length;
        target = omit(localRouteRecord.value[len - 1], ['meta']);
      } else {
        target = omit(localRouteRecord.value[index - 1], ['meta']);
      }
      router.push(target);
    }
    layoutStore.$patch((state) => {
      state.routeRecord.splice(index, 1);
    });
  };
  const onTagClick = (element: RouteLocationWithMeta) => {
    if (isEqualRoute(element)) return;
    const target = omit(element, ['meta']);
    router.push(target);
  };
</script>

<template>
  <div class="box-border px-3 py-2 bg-gray-50">
    <Draggable
      v-model="localRouteRecord"
      :item-key="computedItemKey"
      class="inline-flex"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element, index }">
        <div
          class="h-8 px-3 mr-2 cursor-pointer inline-flex items-center bg-white rounded text-xs last:mr-0"
          @click="onTagClick(element)"
        >
          <span :class="{ 'text-sm font-semibold': isEqualRoute(element) }">{{
            element.meta.title
          }}</span>
          <NIcon
            v-if="localRouteRecord.length > 1"
            size="16"
            class="ml-1 opacity-70 hover:opacity-100"
            @click.stop="onTagClose(element, index)"
          >
            <CloseOutlined />
          </NIcon>
        </div>
      </template>
    </Draggable>
  </div>
</template>
