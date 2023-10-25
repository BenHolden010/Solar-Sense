function getCity(city:string) {
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=46ac1049aa534aed954140046231907&q=${city}&days=3&aqi=yes&alerts=no`)
    .then(  
      res => {
        // if(!res.ok){
        //   throw Error('Unexpected error. Please refresh the page.');
        // } 
        return res.json()})
}

export { getCity }