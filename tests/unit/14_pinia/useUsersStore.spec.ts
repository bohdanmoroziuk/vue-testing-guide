import { createPinia, setActivePinia } from 'pinia';

import { rest, server } from './fakeApi';
// import { useUsersStore } from '../../../src/components/14_pinia/useUsersStore';

beforeEach(() => {
  setActivePinia(createPinia());
});

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('useUsersStore', () => {
  it.todo('fetches the users successfully');

  it.todo('delete the user by specified id');

  it('catches the error on delete user action', async () => {
    server.use(
      rest.delete('/api/users/:id', (req, res, ctx) => (
        res(ctx.status(500))
      )),
    );
  });
});
