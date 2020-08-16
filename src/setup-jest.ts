import 'jest-preset-angular';
import '@testing-library/jest-dom';

import { server } from './mocks/server';

beforeAll(() => {
  // Enable the API mocking in tests
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests have been run
  server.close();
});
