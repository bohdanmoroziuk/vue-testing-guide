import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';
import store, { key } from '@/13_vuex';

const pinia = createPinia();

createApp(App)
  .use(store, key)
  .use(pinia)
  .use(router)
  .mount('#app');
