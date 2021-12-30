import type { MenuOptionSharedPart } from 'naive-ui/lib/menu/src/interface';
import type { VNode, VNodeChild } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';

export type MenuOption = MenuOptionSharedPart & {
  label?: string | (() => VNodeChild);
};

// 参照Naive UI MenuOption Properties扩展
export interface IMenu extends MenuOption {
  key: string; // {project name}.{...nestname}.{route name(component name)}
  meta: {
    permission?: Permission;
    [key: string]: any;
  };
  path?: string; // 指向router path
  children?: IMenu[];
}

export type RouteLocationWithMeta = Pick<
  RouteLocationNormalized,
  'path' | 'hash' | 'name' | 'params' | 'query' | 'meta'
>;
