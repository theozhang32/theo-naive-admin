import type { RouteRecordRaw } from 'vue-router';
import { intersection } from 'lodash-es';
import type { IMenu } from './types';

interface RouteRecordRawLike {
  meta: {
    permisson?: Permission;
    [key: string]: any;
  };
  [key: string]: any;
}

export const routeHasPermission = (route: RouteRecordRaw, userPermission: Permission) => {
  if (!route.meta) {
    return false;
  } else {
    return checkPermission(route as RouteRecordRawLike, userPermission);
  }
};

export const menuHasPermission = (menu: IMenu, userPermission: Permission) => {
  if (!menu.meta.permission) {
    return true;
  } else {
    return checkPermission(menu, userPermission);
  }
};

export function generateTree<T extends { children?: Array<T> }>(
  tree: T[],
  permission: Permission,
  filter: (tnode: T, p: Permission) => boolean
): T[] {
  return tree
    .filter((tnode) => tnode.children || (!tnode.children && filter(tnode, permission)))
    .map((tnode) => {
      const node: T = { ...tnode };
      if (node.children) {
        node.children = generateTree(node.children, permission, filter);
      }
      return node;
    })
    .filter((tnode) => !tnode.children || (tnode.children && tnode.children.length > 0));
}

function checkPermission(target: RouteRecordRawLike, permisison: Permission) {
  if (!target.meta.permission) {
    return true;
  } else {
    return intersection(target.meta.permission, permisison).length > 0;
  }
}
