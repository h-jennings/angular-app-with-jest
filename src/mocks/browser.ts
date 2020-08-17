import { setupWorker } from 'msw';
import { handlers } from './handlers/handlers';

// Setup requests interception using the given handlers.
export const worker = setupWorker(...handlers);
