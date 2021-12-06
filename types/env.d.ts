/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_API_URL: string;
  readonly VITE_PORT?: number;
  readonly VITE_BUILD_COMPRESS?: 'gzip' | 'brotli' | 'none';
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE?: boolean;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
