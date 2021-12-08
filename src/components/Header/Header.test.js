import { render, screen } from '@testing-library/react';
import Header from './index.js';

// TEST DATA -- can be moved to beforeEach
const userDetails = {
   name: "Jane Smith"
};

test('renders user name in header', () => {
  render(<Header userDetails={userDetails}/>);
  const linkElement = screen.getByText(/Jane Smith/i);
  expect(linkElement).toBeInTheDocument();
});
