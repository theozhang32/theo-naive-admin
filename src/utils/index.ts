import type {
  DefineComponent,
  ComponentOptionsMixin,
  EmitsOptions,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
} from 'vue';
import { h } from 'vue';
import { NIcon } from 'naive-ui';

export function renderIcon(
  icon: DefineComponent<
    {},
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    EmitsOptions,
    string,
    VNodeProps & AllowedComponentProps & ComponentCustomProps,
    Readonly<{} & {}>,
    {}
  >
) {
  return h(NIcon, null, { default: () => h(icon) });
}
