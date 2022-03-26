import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App';

test('renders nav', () => {
  const { getByText } = render(
      <App />
  );

  expect(getByText(/ex1/i)).toBeInTheDocument();
});
