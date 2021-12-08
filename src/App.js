import './App.css';
import restaurants from './resources/data/restaurants';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import RestaurantContainer from './components/RestaurantContainer';

// To be fetched from API
const userDetails = {
  name: "Jane Smith"
}


function App() {
  return (
    <div className="App">
       <Header userDetails={userDetails}/>
       <Toolbar locationDetails={{name: restaurants.neighborhood}}/>
       <RestaurantContainer restaurants = {restaurants.restaurants}/>
    </div>
  );
}

export default App;
