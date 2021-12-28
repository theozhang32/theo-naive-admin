import type { RouteRecordName, RouteRecordRaw, RouteLocationRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { IMenu } from '@/types';

export interface ILayoutStoreState {
  keepAliveComponents: RouteRecordName[];
  dynamicRoutes: RouteRecordRaw[];
  dynamicMenus: IMenu[];
  routeRecord: RouteLocationRaw[];
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
