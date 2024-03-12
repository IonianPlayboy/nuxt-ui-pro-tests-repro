import { defineVitestConfig as defineConfig } from '@nuxt/test-utils/config';
// NOTE: The tests work if you use the import below instead
// import { defineConfig } from 'vitest/config';

import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const currentDirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(currentDirname, '.'),
    },
  },
});
