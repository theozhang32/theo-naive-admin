import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

import { createHtmlPlugin } from './html';
import { createCompressPlugin } from './compress';

export function createVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx(),
    // 使用unplugin-vue-component按需引入Naive UI
    Components({ dts: true, resolvers: [NaiveUiResolver()] }),
    createHtmlPlugin(viteEnv, isBuild),
  ];

  if (isBuild) {
    vitePlugins.push(createCompressPlugin(viteEnv));
  }

  return vitePlugins;
}
