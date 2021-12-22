import type { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layout/index.vue';
import { name as projectName } from '../../../package.json';

const routes: RouteRecordRaw[] = [
  {
    path: '/table',
    redirect: '/table/simple',
    component: BasicLayout,
    children: [
      {
        path: 'simple',
        name: 'SimpleTableExample',
        component: () => import('@/pages/table/simple.vue'),
        meta: {
          title: '展示表格',
          menu: `${projectName}.table.SimpleTableExample`,
        },
      },
      {
        path: 'data',
        name: 'DataTableExample',
        component: () => import('@/pages/table/data.vue'),
        meta: {
          title: '数据表格',
          menu: `${projectName}.table.DataTableExample`,
        },
      },
    ],
  },
];

export default routes;
