import type { RouteRecordRaw } from 'vue-router';
import ContainerLayout from '@/layout/ContainerLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/table',
    name: 'TableExample',
    redirect: '/table/basic',
    component: ContainerLayout,
    children: [
      {
        path: 'basic',
        name: 'BasicTableExample',
        component: () => import('@/pages/table/basic.vue'),
        meta: {
          title: '基础列表',
        },
      },
    ],
  },
];

export default routes