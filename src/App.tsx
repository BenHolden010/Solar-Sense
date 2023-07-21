import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiFetch from './ApiCalls'
import { useState, useEffect } from 'react';

function App() {
  const [location, setLocation] = useState<string | null>("")
  const [input, setInput] = useState<string | null>("")
  const [temp, setTemp] = useState<number | null>(0)
  const [locations, setLocations] =useState<[]>([])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }
  console.log(location)

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/search.json?key=46ac1049aa534aed954140046231907&q=${input}`)
    .then(res => res.json())
    .then(data => setLocations(data))
    // .then(data => setTemp(data.current.temp_f))
  }, [input])
  
  console.log('Locations', locations)
  return (
    <div>
      <input type="text" placeholder="search for city here" onChange={handleChange}></input>
      {/* {locations.forEach(location => <br>{location.name}</br>)} */}
      <h1>{input}</h1>
      <h2>{temp}</h2>
    </div>
  )
}


export default App;