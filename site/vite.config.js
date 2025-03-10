import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import pwaConfig from './pwaConfig';
import tdocPlugin from './plugin-tdoc';

const resolvePath = (r) => path.resolve(__dirname, r);

const publicPathMap = {
  preview: '/',
  intranet: '/react/',
  production: 'https://static.tdesign.tencent.com/react/',
};

const disableTreeShakingPlugin = (paths) => ({
  name: 'disable-treeshake',
  transform(code, id) {
    for (const path of paths) {
      if (id.includes(path)) {
        return { code, map: null, moduleSideEffects: 'no-treeshake' };
      }
    }
  },
});

export default ({ mode }) =>
  defineConfig({
    base: publicPathMap[mode],
    resolve: {
      alias: {
        '@': resolvePath('../'),
        '@site': resolvePath('./'),
        '@docs': resolvePath('./docs'),
        '@components': resolvePath('./src/components'),
        '@common': resolvePath('../packages/common'),
        'tdesign-react/es': resolvePath('../packages/components'),
        'tdesign-react': resolvePath('../packages/components'),
        '@test/utils': resolvePath('../test/utils'),
      },
    },
    build: {
      outDir: '../_site',
      rollupOptions: {
        input: {
          index: 'index.html',
          playground: 'playground.html',
        },
      },
    },
    jsx: 'react',
    server: {
      host: '0.0.0.0',
      port: 15000,
      open: '/',
      https: false,
      fs: {
        strict: false,
      },
    },
    test: {
      environment: 'jsdom',
    },
    plugins: [react(), tdocPlugin(), VitePWA(pwaConfig), disableTreeShakingPlugin(['style/'])],
  });
