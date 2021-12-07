import type { RouteRecordRaw, RouteMeta } from 'vue-router';

export type RouteRecordRawWithMeta = RouteRecordRaw & { meta: RouteMeta };
