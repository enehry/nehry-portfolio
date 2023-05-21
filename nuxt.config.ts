
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
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