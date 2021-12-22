import type { VNode, VNodeChild } from 'vue';

// 参照Naive UI MenuOption Properties扩展
export interface IMenu {
  key: string; // {project name}.{...nestname}.{route name(component name)}
  label: string;
  meta: {
    permission?: Permission;
    [key: string]: any;
  };
  path?: string; // 指向router path
  icon?: () => VNode;
  extra?: string | (() => VNodeChild);
  disabled?: boolean;
  children?: IMenu[];
}
