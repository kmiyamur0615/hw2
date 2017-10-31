
let link = document.getElementById("weather");
link.addEventListener("click",function(event){
  event.preventDefault;
  getWeather();
})


let getWeather = function() {
  navigator.geolocation.getCurrentPosition(handlePosition);

  // Following codes for Q1 is commented out and embedded in "handlePosition" function

  // let latitude = '41.8781';
  // let longitude = '-87.6298';
  // let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  // openweathermap_api_url += 'lat=' + latitude
  // openweathermap_api_url += '&lon=' + longitude
  // openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  //
  // fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}


let convertToJSON = function(response) {
  return response.json();
}


let updateWeather = function(data) {
  let cardImgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  let cardText = "It is " + data.main.temp.toFixed(0) + " degrees outside.";

  document.querySelector(".card-img-top").src = cardImgURL;
  document.querySelector(".card-title").innerHTML = data.name;
  document.querySelector(".card-text").innerHTML = cardText;
}


let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}


let handlePosition = function(info) {
  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);

  console.info("Your current position:");
  console.info("Latitude: " + latitude);
  console.info("Longitude: " + longitude);

  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
};



// HINT:
// Weather icon example: http://openweathermap.org/img/w/10d.png
// The very last part ('10d.png') can change based on the current conditions.
