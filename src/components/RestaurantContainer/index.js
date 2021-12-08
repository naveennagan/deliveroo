import './RestaurantContainer.css';
import RestaurantCard from '../RestaurantCard';

function RestaurantContainer(props) {
  const {restaurants} = props;
  console.log(restaurants);
  return (
    <div className="restaurant-container">
       <p className="restaurant-count-info"> {restaurants.length} restaurants</p>
       <div className="restaurant-list">
           {
               (restaurants || []).map((restaurant)=>{
                   return <RestaurantCard restaurant={restaurant}/>
               })
           }
       </div>
    </div>
  );
}

export default RestaurantContainer;
