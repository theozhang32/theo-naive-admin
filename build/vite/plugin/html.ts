import type { Plugin } from 'vite';
import html from 'vite-plugin-html';

export function createHtmlPlugin(env: ImportMetaEnv, isBuild: boolean): Plugin | Plugin[] {
  const { VITE_APP_TITLE } = env;
  return html({
    minify: isBuild,
    inject: {
      data: {
        title: VITE_APP_TITLE,
      },
    },
  });
}
