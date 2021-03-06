import { render, screen, fireEvent } from '@testing-library/angular';

import { SimpleExampleComponent } from './simple-example.component';
import { SimpleExampleService } from './simple-example.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

test('renders the current value and can increment and decrement', async () => {
  const { debug } = await render(SimpleExampleComponent, {
    imports: [HttpClientModule],
    componentProviders: [
      {
        provide: SimpleExampleService,
        useValue: {
          getMockApiData() {
            return of(JSON.stringify({ test: 'working!' }));
          },
        },
      },
    ],
  });

  expect(screen.getByTestId('mock-content')).toBeInTheDocument();

  const incrementControl = screen.getByRole('button', { name: /increment/i });
  const decrementControl = screen.getByRole('button', { name: /decrement/i });
  const valueControl = screen.getByTestId('value');

  expect(valueControl.textContent).toBe('0');

  fireEvent.click(incrementControl);
  fireEvent.click(incrementControl);
  expect(valueControl.textContent).toBe('2');

  fireEvent.click(decrementControl);
  expect(valueControl.textContent).toBe('1');

  debug(screen.getByTestId('mock-content'));
});
