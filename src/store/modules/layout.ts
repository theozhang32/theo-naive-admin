import type { RouteRecordName, RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { IMenu } from '@/types';

export interface ILayoutStoreState {
  keepAliveComponents: RouteRecordName[];
  dynamicRoutes: RouteRecordRaw[];
  dynamicMenus: IMenu[];
  appSiderCollapsed: boolean;
}

export const useLayoutStore = defineStore('layout', {
  state: (): ILayoutStoreState => {
    return {
      keepAliveComponents: [],
      dynamicRoutes: [],
      dynamicMenus: [],
      appSiderCollapsed: false,
    };
  },
});
