import type { Plugin } from 'vite';
import compress from 'vite-plugin-compression';

export function createCompressPlugin(env: ImportMetaEnv): Plugin | Plugin[] {
  const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = env;
  const plugins: Plugin[] = [];

  if (VITE_BUILD_COMPRESS) {
    const compressList = VITE_BUILD_COMPRESS.split(',');
    compressList.includes('gzip') &&
      plugins.push(
        compress({
          ext: '.gz',
          deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
        })
      );
    compressList.includes('brotli') &&
      plugins.push(
        compress({
          ext: '.br',
          algorithm: 'brotliCompress',
          deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
        })
      );
  }

  return plugins;
}
