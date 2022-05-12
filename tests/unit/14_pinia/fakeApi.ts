import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
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
);

export {
  server,
  rest,
};
