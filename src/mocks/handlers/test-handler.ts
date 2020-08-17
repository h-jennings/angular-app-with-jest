import { rest } from 'msw';

export const testHandlers = [
  rest.get('/testendpoint', (_req, res, ctx) => {
    return res(
      ctx.json({
        message: 'This is a test response!',
      }),
      ctx.status(200)
    );
  }),
];
