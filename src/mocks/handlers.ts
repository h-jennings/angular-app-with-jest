import { rest } from 'msw';

export const handlers = [
  rest.get('testendpoint', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'This is a test response!',
      })
    );
  }),
];
