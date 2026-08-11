import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Solergy header', () => {
  render(<App />);
  const logoElements = screen.getAllByText(/solergy/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
