import { render, screen } from '@testing-library/react';
import App from './Detail';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/1/i);
  expect(linkElement).toBeInTheDocument();
});
