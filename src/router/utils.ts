import type { RouteRecordRaw, Permission } from 'vue-router';
import { intersection } from 'lodash-es';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const routeHasPermission = (route: RouteRecordRaw, userPermission: Permission) => {
  if (!route.meta) {
    return false;
  } else {
    if (!route.meta.permission) {
      return true;
    } else {
      return intersection(route.meta.permission, userPermission).length > 0;
    }
  }
};

export function generateTree<T extends { children?: Array<T> }>(
  tree: T[],
  permission: Permission,
  filter: (t: T, p: Permission) => boolean
): T[] {
  return tree
    .filter((t) => t.children || (!t.children && filter(t, permission)))
    .map((t) => {
      const _t: T = { ...t };
      if (_t.children) {
        _t.children = generateTree(_t.children, permission, filter);
      }
      return _t;
    })
    .filter((t) => !t.children || (t.children && t.children.length > 0));
}
