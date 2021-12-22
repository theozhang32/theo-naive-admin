import type { RouteRecordName, RouteRecordRaw } from 'vue-router';
import type { MenuOption } from 'naive-ui/lib/menu/src/interface';
import { defineStore } from 'pinia';
import { omit } from 'lodash-es';
import { IMenu } from '@/router/types';

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
  getters: {
    formatMenus: (state) => formatMenus(state.dynamicMenus),
  },
});

function formatMenus(menus: IMenu[]): MenuOption[] {
  return menus.map((menu) => {
    const _m = omit(menu, ['path', 'meta']) as MenuOption;
    if (menu.children && menu.children.length > 0) {
      _m.children = formatMenus(menu.children);
    }
    return _m;
  });
}
