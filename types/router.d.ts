import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    breadcrumbName?: string;
    notBreadcrumb?: boolean;
    menu?: string;
    permission?: Permission;
    keepAlive?: boolean;
  }
  interface ConfirmedRoute {
    path?: string;
    query?: LocationQuery;
    hash?: string;
    name?: RouteRecordName;
    params?: RouteParams;
    meta: RouteMeta;
  }
}
