declare type Recordable<T = any> = Record<string, T>;

declare type Permission = string[];

// declare module 'vue' {
//   export type JSXComponent<Props = any> =
//     | { new (): ComponentPublicInstance<Props> }
//     | FunctionalComponent<Props>;
// }

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

declare module 'virtual:*' {
  const result: any;
  export default result;
}
