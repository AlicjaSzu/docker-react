import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link jyvuj kjb', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
