import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';

test('renders abt link in nav', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
