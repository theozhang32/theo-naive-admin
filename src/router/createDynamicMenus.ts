import { useUserStore, useLayoutStore } from '@/store';
import type { IMenu } from './types';
import { menus } from './menus';
import { menuHasPermission, generateTree } from './utils';

export function createDynamicMenus() {
  const userStore = useUserStore();
  const layoutStore = useLayoutStore();
  if (userStore.isLogin) {
    layoutStore.dynamicMenus = generateTree<IMenu>(menus, userStore.permission, menuHasPermission);
  }
}
