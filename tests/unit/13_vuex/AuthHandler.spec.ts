import { mount, flushPromises } from '@vue/test-utils';

import AuthHandler from '../../../src/13_vuex/AuthHandler.vue';
import store, { key } from '../../../src/13_vuex';

// const wrapper = mount(AuthHandler, {
//   global: {
//     plugins: [
//       [store, key],
//     ],
//   },
// });

describe('AuthHandler', () => {
  it.todo('renders a login button');

  it.todo('renders a logout button and a username');
});
