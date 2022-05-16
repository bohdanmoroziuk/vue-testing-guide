import { mount } from '@vue/test-utils';

import ClickToEditPostButton from '../../../src/15_router/ClickToEditPostButton.vue';

afterEach(() => {
  jest.clearAllMocks();
});

const mockPush = jest.fn();

jest.mock('vue-router', () => ({
  useRoute: jest.fn().mockImplementation(() => ({
    params: {
      id: '1',
    },
  })),
  useRouter: jest.fn().mockImplementation(() => ({
    push: mockPush,
  })),
}));

describe('ClickToEditPostButton', () => {
  it('allows authenticated user to edit a post', async () => {
    const wrapper = mount(ClickToEditPostButton, {
      props: {
        isAuthenticated: true,
      },
      global: {
        stubs: [
          'router-view',
          'router-link',
        ],
      },
    });
  });

  it('redirects an unauthenticated user to 404', async () => {
    const wrapper = mount(ClickToEditPostButton, {
      props: {
        isAuthenticated: false,
      },
      global: {
        stubs: [
          'router-view',
          'router-link',
        ],
      },
    });
  });
});
