import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import App from '../../../src/App.vue';
import { routes } from '../../../src/router';

let router;

beforeEach(async () => {
  router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.push('/');

  await router.isReady();
});

describe('App', () => {
  it('allows to navigate between pages', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
  });
});
