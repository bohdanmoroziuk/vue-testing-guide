import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  rest.get('/api/users', (req, res, ctx) => (
    res(ctx.json([
      {
        id: '1',
        name: 'John Doe',
      },
    ]))
  )),
  rest.delete('/api/users/:id', (req, res, ctx) => (
    res(ctx.json({
      success: true,
    }))
  )),
];

const server = setupServer(...handlers);

export {
  server,
  rest,
};
