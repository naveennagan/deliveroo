import { render, screen } from '@testing-library/react';
import Toolbar from './index.js';

// TEST DATA -- can be moved to beforeEach
const locationDetails = {
   name: "locationDetails"
};

test('renders location name in toolbar', () => {
  render(<Toolbar locationDetails={locationDetails}/>);
  const linkElement = screen.getByText(/locationDetails/i);
  expect(linkElement).toBeInTheDocument();
});
