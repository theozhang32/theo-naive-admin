<script lang="ts">
  export default {
    name: 'AppTabView',
  };
</script>

<script setup lang="ts">
  import type { ConfirmedRoute } from 'vue-router';
  import { computed, ref } from 'vue';
  import Draggable from 'vuedraggable';
  import { useRoute } from 'vue-router';
  import { omitBy, isEqual, pick, isUndefined } from 'lodash-es';
  import { useLayoutStore } from '@/store';

  const route = useRoute();
  console.log(route);
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
  const isEqualRoute = (element: ConfirmedRoute) => {
    return isEqual(
      omitBy(pick(route, ['path', 'name', 'params', 'query', 'hash', 'meta']), isUndefined),
      element
    );
  };
</script>

<template>
  <div class="box-border h-8 py-1 px-3">
    <Draggable
      v-model="localRouteRecord"
      :item-key="computedItemKey"
      class="inline-flex"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <div :class="{ 'font-semibold': isEqualRoute(element) }">{{ element.meta.title }}</div>
      </template>
    </Draggable>
  </div>
</template>
