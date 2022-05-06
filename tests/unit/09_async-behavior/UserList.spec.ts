import axios from 'axios';

// import mountWithSuspense from './utils/mountWithSuspense';
// import UserList from '../../../src/components/09_async-behavior/UserList.vue';

describe('UserList', () => {
  it('renders a list of users', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      data: [
        {
          id: '1',
          name: 'John Doe',
        },
        {
          id: '2',
          name: 'Michael Brown',
        },
        {
          id: '3',
          name: 'Chris Smith',
        },
      ],
    });
  });
});
