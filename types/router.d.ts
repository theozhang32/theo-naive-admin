import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    menu?: string;
    permission?: Permission;
    keepAlive?: boolean;
  }
}
