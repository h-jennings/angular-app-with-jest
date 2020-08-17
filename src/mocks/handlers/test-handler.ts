import { rest } from 'msw';

const testEndpoint = rest.get('/testendpoint', (_req, res, ctx) => {
  return res(
    ctx.json({
      message: 'This is a test response!',
    }),
    ctx.status(200)
  );
});
// testEndpoint.shouldSkip = true;

export const testHandlers = [testEndpoint];
