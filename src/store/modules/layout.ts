import type { RouteRecordName, RouteRecordRaw, RouteLocationRaw, RouteMeta } from 'vue-router';
import { defineStore } from 'pinia';
import { IMenu, RouteLocationWithMeta } from '@/types';

export interface ILayoutStoreState {
  keepAliveComponents: RouteRecordName[];
  dynamicRoutes: RouteRecordRaw[];
  dynamicMenus: IMenu[];
  routeRecord: RouteLocationWithMeta[];
  appSiderCollapsed: boolean;
  isFullScreen: boolean;
  routeViewKey: number;
}

export const useLayoutStore = defineStore('layout', {
  state: (): ILayoutStoreState => {
    return {
      keepAliveComponents: [],
      dynamicRoutes: [],
      dynamicMenus: [],
      routeRecord: [],
      appSiderCollapsed: false,
      isFullScreen: false,
      routeViewKey: Date.now(),
    };
  },
});
