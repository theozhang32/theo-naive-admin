import type { BuildOptions, Terser } from 'vite';
export function createBuildOptions(env: ImportMetaEnv, isBuild: boolean): BuildOptions {
  const options: BuildOptions = {
    target: 'es2015',
    // outDir: 'dist',
    terserOptions: {
      compress: {
        keep_infinity: true,
      },
    },
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  };
  if (isBuild) {
    (options.terserOptions!.compress as Terser.CompressOptions).pure_funcs = [
      'console.log',
      'console.info',
    ];
  }
  return options;
}
