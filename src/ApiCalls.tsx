function getCity(city:string) {
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=${city}&days=3&aqi=yes&alerts=no`)
    .then(res => res.json())
    .then(data => console.log(data))
}

function searchCities(userInput:string) {
  return fetch(`https://api.weatherapi.com/v1/search.json?key=46ac1049aa534aed954140046231907&q=${userInput}`)
  .then(res => res.json())
  .then(data => console.log(data))
}

export default {
  getCity,
  searchCities
}