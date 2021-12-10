import 'vue-router';

declare module 'vue-router' {
  type Permission = string[];
  interface RouteMeta {
    title: string;
    auth?: boolean;
    permission?: Permission;
    keepAlive?: boolean;
  }
}
