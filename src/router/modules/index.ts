import type { RouteRecordRawWithMeta } from '../types';

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
];

export default routes;
