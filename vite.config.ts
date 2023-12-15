import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  plugins: [
    UnoCSS(),
    Vue(),
    Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        dts: true,
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
    }),
  ],
})
