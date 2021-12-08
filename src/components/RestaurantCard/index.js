import './RestaurantCard.css';

function RestaurantCard(props) {
  const {restaurant} = props;

  const getRestaurantDescription = (restaurant)=>{
      var priceTag = new Array(restaurant.price).fill("$").join("");
      var allTags = restaurant.tags.join(" . ");
      return allTags+" . "+priceTag;
  }

  return (
    <div className="Restaurant-card" key= {restaurant.id} onClick = {()=>{
        window.location.href = restaurant.url
    }}>
       <div className="Restaurant-card-img">
           <img src= {restaurant.image} />
       </div>
       <div className="Restaurant-card-info">
          <div className="Restaurant-card-title">{restaurant.name}</div>
          <div className="Restaurant-card-tags">{getRestaurantDescription(restaurant)}</div>
       </div>
    </div>
  );
}

export default RestaurantCard;
