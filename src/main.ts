import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import vuex, { key } from '@/13_vuex';

const pinia = createPinia();

createApp(App)
  .use(vuex, key)
  .use(pinia)
  .use(router)
  .mount('#app');
