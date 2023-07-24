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
import { clear } from 'console';


function App() {
  const [locationName, setLocationName] = useState<string>("")
  const [locationRegion, setLocationRegion] = useState<string>("")
  const [locationCountry, setLocationCountry] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [temp, setTemp] = useState<number>(0)
  const [conditionText, setConditionText] = useState<string>('')
  const [conditionIcon, setConditionIcon] = useState<string>('')
  const [locations, setLocations] =useState<{}[]>([])
  const [serverError, setServerError] = useState<boolean>(false)
  const [savedLocations, setSavedLocations] = useState<{}[] >([])


  const [savedTemp,setSavedTemp] = useState<number>(0)
  const [savedLocationName, setSavedLocationName] = useState<string>("")
  const [savedLocationRegion,setSavedLocationRegion] = useState<string>("")
  const [savedLocationCountry, setSavedLocationCountry] = useState<string>("")
  const [savedConditionText, setSavedConditionText] = useState<string>("")
  const [savedConditionIcon, setSavedConditionIcon] = useState<string>("")


  useEffect(() => {
    const data = window.localStorage.getItem("LOCAL_STORAGE_KEY")
    if (data !== null) setSavedLocations(JSON.parse(data))
  },[])


  useEffect(() => {
    window.localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(savedLocations))

  }, [savedLocations])


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }
console.log(savedLocationName)
  function addLocation() {
    setSavedLocations(
      [...savedLocations, {
        name:savedLocationName, 
        temp:savedTemp, 
        region: savedLocationRegion, 
        country: savedLocationCountry, 
        icon: savedConditionIcon, 
        text: savedConditionText
      } ])
  }


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
      setServerError(false)
    })
    .catch(error => setServerError(true))
  }
  }, [input])

  
   useEffect(() => {
    
     savedLocations.map(location => {
console.log(location)
    {savedLocations && getCity(location?.name)
    .then(data => {
      setSavedTemp(data?.current?.temp_f)
      setSavedLocationName(data?.location?.name)
      setSavedLocationRegion(data?.location?.region)
      setSavedLocationCountry(data?.location?.country)
      setSavedConditionText(data?.current?.condition?.text)
      setSavedConditionIcon(data?.current?.condition?.icon)
    })
    .catch(error => setServerError(true))
  }
    })
  }, [savedLocations])




  console.log('SERVER ERROR', serverError);

  return (
    <div className="app">
    <Nav />
    <NavLink to='/saved-locations'>
            <button>View Saved Locations</button>
    </NavLink>
      <Routes>

        <Route path="/" element={ <div className='app-home'><h2>Select Your Location</h2>
      <input type="text" placeholder="search for city here" onChange={handleChange} className="search"/>
      {serverError && <ServerError />}
      <section className="weather-card-container">
      {!serverError && locationName && <Card temp={temp} locationName={locationName} conditionText={conditionText}
         conditionIcon={conditionIcon} locationRegion={locationRegion} locationCountry={locationCountry} />}
      </section></div>}/>

        <Route path=":location" element={<FocusCard addLocation={addLocation}
         locationName={locationName}  locationRegion={locationRegion} conditionText={conditionText}
         conditionIcon={conditionIcon} locationCountry={locationCountry} />}
         />
        <Route path='/saved-locations' element={<SavedLocations savedLocations={savedLocations} /> } />
      </Routes>
  
    </div>
  )
}


export default App;