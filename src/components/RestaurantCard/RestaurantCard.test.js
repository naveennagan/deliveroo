import { render, screen } from '@testing-library/react';
import RestaurantCard from './index.js';

// TEST DATA -- can be moved to beforeEach
const restaurant = {
    "id": "63460",
    "name": "Burrito Kitchen",
    "image": "https://f.roocdn.com/images/menus/25785/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1477308353",
    "url": "https://deliveroo.co.uk/menu/london/bank/burrito-kitchen-cheapside",
    "price": 2,
    "tags": [
      "Mexican",
      "Burritos",
      "Halal"
    ]
};

test('renders restaurant name in card', () => {
  render(<RestaurantCard restaurant={restaurant}/>);
  const linkElement = screen.getByText(/Burrito Kitchen/i);
  expect(linkElement).toBeInTheDocument();
});
