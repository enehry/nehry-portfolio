import { title } from "process";

export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'John Nehry Dedoro | Portfolio',
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

},);