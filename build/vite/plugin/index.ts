import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { createHtmlPlugin } from './html';
import { createCompressPlugin } from './compress';

export function createVitePlugins(viteEnv: ImportMetaEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [vue(), vueJsx(), createHtmlPlugin(viteEnv, isBuild)];

  if (isBuild) {
    vitePlugins.push(createCompressPlugin(viteEnv));
  }

  return vitePlugins;
}
