import type { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import { wrapperEnv } from './build/utils';
import { createVitePlugins } from './build/vite/plugin';
import { createBuildOptions } from './build/vite/build';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_PORT } = viteEnv;
  const isBuild = command === 'build';
  return {
    base: VITE_PUBLIC_PATH,
    esbuild: {},
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    server: {
      host: true,
      port: VITE_PORT,
      proxy: {
        // dev server proxy config
      },
    },
    build: createBuildOptions(viteEnv, isBuild),
  };
});
