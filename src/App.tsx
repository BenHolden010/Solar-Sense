import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { searchCities, getCity }from './ApiCalls'
import { useState, useEffect } from 'react';
import Card from "./Components/Card";
import FocusCard from "./Components/Focus"
import Nav from "./Components/Nav"
import {Routes, Route, NavLink} from 'react-router-dom'
import ServerError from './Components/ServerError';
import SavedLocations from './Components/SavedLocations';


function App() {
  const [locationName, setLocationName] = useState<string>("")
  const [locationRegion, setLocationRegion] = useState<string>("")
  const [locationCountry, setLocationCountry] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [temp, setTemp] = useState<number>(0)
  const [conditionText, setConditionText] = useState<string>('')
  const [conditionIcon, setConditionIcon] = useState<string>('')
  const [locations, setLocations] =useState<[]>([])
  const [sunset, setSunset] = useState<[]>([])
  const [sunrise, setSunrise] = useState<[]>([])
  const [serverError, setServerError] = useState<boolean>(false)
  const [savedLocations, setSavedLocations] = useState<string[]>([])

  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }
  
  function addLocation() {
    setSavedLocations([...savedLocations, locationName])
    console.log(savedLocations)
  }

//   setTodos(prevTodos => {
//     return [...prevTodos, {id:1, name:name, complete: false}]
// })
console.log(locationName, 'NAME')

  useEffect(() => {
    {input && searchCities(input)
    .then(data => {
      setLocations(data)
      setServerError(false)
    })
    .catch(error => setServerError(true))
    }
  }, [input])

  useEffect(() => {
    {input && getCity(input)
    .then(data => {
      setTemp(data?.current?.temp_f)
      setLocationName(data?.location?.name)
      setLocationRegion(data?.location?.region)
      setLocationCountry(data?.location?.country)
      setConditionText(data?.current?.condition?.text)
      setConditionIcon(data?.current?.condition?.icon)
      setSunrise(data?.forecast?.forecastday)
      setSunset(data?.forecast?.forcastday)
      setServerError(false)
    })
    .catch(error => setServerError(true))
  }
  }, [input])

  console.log('SERVER ERROR', serverError);

  return (
    <div className="app">
    <Nav />
      <Routes>

        <Route path="/" element={ <div className='app-home'><h2>Select Your Location</h2>
      <input type="text" placeholder="search for city here" onChange={handleChange} className="search"/>
      {serverError && <ServerError />}
      <section className="weather-card-container">
      {!serverError && locationName && <Card temp={temp} locationName={locationName} conditionText={conditionText}
         conditionIcon={conditionIcon} locationRegion={locationRegion} locationCountry={locationCountry} />}
      </section></div>}/>

        <Route path=":location" element={<FocusCard addLocation={addLocation}
        //  temp={temp} 
         locationName={locationName} 
        //  conditionText={conditionText}
        //  conditionIcon={conditionIcon} locationRegion={locationRegion} locationCountry={locationCountry} 
         />}
         />
        <Route path='/saved-locations' element={<SavedLocations name={locationName} />} />
      </Routes>
  
    </div>
  )
}


export default App;