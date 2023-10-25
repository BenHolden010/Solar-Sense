import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders Solar Sense title', () => {
  render(
  <MemoryRouter>
    <App />
  </MemoryRouter>);
  const linkElement = screen.getByText(/Solar Sense/i);
  expect(linkElement).toBeInTheDocument();
});
