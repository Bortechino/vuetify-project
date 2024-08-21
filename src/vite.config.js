// vite.config.js
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

import {
  resolve
} from 'path'
import {
  defineConfig
} from 'vite'





export default defineConfig
  ({
    plugins: [
      vue(),
      vuetify(),
    ],

    build: {
      rollupOptions
        : {
        input
          : {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'pages/About'),
          nested: resolve(__dirname, 'pages/Contacts'),
          nested: resolve(__dirname, 'pages/WebProduct'),
          nested: resolve(__dirname, 'pages/Services'),
        },
      },
    },
  })
