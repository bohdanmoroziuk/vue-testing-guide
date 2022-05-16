import { flushPromises, mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import { server } from './fakeApi';
import UsersHandler from '../../../src/14_pinia/UsersHandler.vue';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('UsersHandler', () => {
  it('renders a user list', async () => {
    const wrapper = mount(UsersHandler, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
          }),
        ],
      },
    });
  });

  it('deletes the user when the "x" button clicked', async () => {
    const wrapper = mount(UsersHandler, {
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
          }),
        ],
      },
    });
  });
});
