import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { searchCities, getCity }from './ApiCalls'
import { useState, useEffect } from 'react';
import Card from "./Components/Card";


function App() {
  const [location, setLocation] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [temp, setTemp] = useState<number>(0)
  const [locations, setLocations] =useState<[]>([])
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }
  
  useEffect(() => {
    // if (!input) {
    //   return <p>"Please enter a Location"</p>
    // }
    searchCities(input)
    .then(data => setLocations(data))
    // .then(data => setTemp(data.current.temp_f))
  }, [input])

  useEffect(() => {
    getCity(input)
    .then(data => {
      setTemp(data?.current?.temp_f)
      setLocation(data?.location?.name)
    })
    // .then(data=>{
    //   console.log(data.current.temp_f)
    //   if(data.current.temp_f){
    //     return console.log(data.current.temp_f)
    //   }
    //   return console.log("Please enter valid location")
    // })
  }, [input])
  // console.log(locations)

  return (
    <div className="app">
      <input type="text" placeholder="search for city here" onChange={handleChange}></input>
      <button>SEARCH</button>
      <section className="weather-card-container">
        <Card temp={temp} location={location}/>
      </section>
      <h1>{input}</h1>
      <h2>{temp}</h2>
    </div>
  )
}


export default App;