import { defineNuxtPlugin } from '#app';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });

  }
});