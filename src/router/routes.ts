import type { RouteRecordRawWithMeta } from './types';

const List = {
  render() {
    return null;
  },
};

const routes: RouteRecordRawWithMeta[] = [
  {
    path: '/list',
    component: List,
    meta: {
      title: '列表',
    },
  },
  {
    path: '/login',
    component: List,
    meta: {
      title: '登录',
    },
  },
];

export default routes;
