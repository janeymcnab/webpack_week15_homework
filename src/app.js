const Restaurant = require('./models/restaurant');

document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit)
  
    const button = document.querySelector('#delete-all');
    button.addEventListener('click', handleButtonClick); 
});

const handleFormSubmit = function(event){
    event.preventDefault();

    const newRestaurantListItem = document.createElement('li');

    const newName = document.createElement('h3');
    newName.textContent = event.target.name.value;
    newName.classList.add('name-item');
    newRestaurantListItem.appendChild(newName);

    const newCity = document.createElement('h4');
    newCity.textContent = event.target.city.value;
    newCity.classList.add('city-item');
    newRestaurantListItem.appendChild(newCity);

    const newRating = document.createElement('p');
    newRating.textContent = `You gave ${event.target.name.value} ${event.target.rating.value} out of 5 stars`;
    newRating.classList.add('rating-item');
    newRestaurantListItem.appendChild(newRating);

    const newRecommended = document.createElement('p');
    if (event.target.recommend.value === "no"){
        newRecommended.textContent = `You would not recommend ${event.target.name.value}`
    } else if (event.target.recommend.value === "maybe"){
        newRecommended.textContent = `You thought ${event.target.name.value} was okay`
    } else {
        newRecommended.textContent = `You loved ${event.target.name.value}!`
    };
    newRecommended.classList.add('reccomend-item');
    newRestaurantListItem.appendChild(newRecommended);

    const restaurantList = document.querySelector("#restaurant-list");
    restaurantList.appendChild(newRestaurantListItem);
  
    event.target.reset();
}

const handleButtonClick = function(){
    let readingList = document.getElementById("reading-list");
    if (readingList.parentNode) {
    readingList.parentNode.removeChild(readingList);
  }
  };
