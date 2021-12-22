import { TableOutlined } from '@vicons/antd';
import type { IMenu } from './types';
import { name as projectName } from '../../package.json';
import { renderIcon } from '@/utils';

export const menus: IMenu[] = [
  {
    key: `${projectName}.table`,
    label: '表格示例',
    icon: () => renderIcon(TableOutlined),
    meta: {},
    children: [
      {
        key: `${projectName}.table.SimpleTableExample`,
        path: '/table/simple',
        label: '展示表格',
        meta: {},
      },
      {
        key: `${projectName}.table.DataTableExample`,
        path: '/table/data',
        label: '数据表格',
        meta: {},
      },
    ],
  },
];
