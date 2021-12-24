import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    breadcrumbName?: string;
    menu?: string;
    permission?: Permission;
    keepAlive?: boolean;
  }
}
