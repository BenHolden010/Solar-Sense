import React, { ChangeEvent } from 'react';
import './App.css';
import { getCity }from './ApiCalls'
import { useState, useEffect } from 'react';
import Card from "./Components/Card";
import FocusCard from "./Components/Focus"
import Nav from "./Components/Nav"
import {Routes, Route, Navigate } from 'react-router-dom'
import ServerError from './Components/ServerError';
import SavedLocations from './Components/SavedLocations';
import PageNotFound from './Components/PageNotFound';


type LocationData = {
  name: string;
  temp: number;
  region: string;
  country: string;
  icon: string;
  text: string;
};
function App() {

  const [locationName, setLocationName] = useState<string>("")
  const [locationRegion, setLocationRegion] = useState<string>("")
  const [locationCountry, setLocationCountry] = useState<string>("")
  const [input, setInput] = useState<string>("")
  const [temp, setTemp] = useState<number>(0)
  const [conditionText, setConditionText] = useState<string>('')
  const [conditionIcon, setConditionIcon] = useState<string>('')
  const [serverError, setServerError] = useState<boolean>(false)
  const [saved, setSaved] = useState('bookmark');
  const [savedLocations, setSavedLocations] = useState<LocationData[]>(
    JSON.parse(sessionStorage.getItem("SESSION_STORAGE_KEY") ||'[]'
  ));


  useEffect(() => {
    const data = window.sessionStorage.getItem("SESSION_STORAGE_KEY")
    if (data !== null) setSavedLocations(JSON.parse(data))
  },[])


  useEffect(() => {
    if(savedLocations) {
      window.sessionStorage.setItem("SESSION_STORAGE_KEY", JSON.stringify(savedLocations))
    }
  }, [savedLocations])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

const removeLocation = (name:string) => {
  const filteredSavedLocations = savedLocations.filter((location) => location.name !== name);
  setSavedLocations(filteredSavedLocations);
};

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
      setSaved('bookmark')
      {savedLocations.some(location=>location.name===data.location.name) && setSaved('bookmark_added')}
    })
    .catch(error => setServerError(true))
  }
  }, [input])

const toggleSaved = () => {
  const newSaved = saved === 'bookmark' ? 'bookmark_added' : 'bookmark'
  setSaved(newSaved)
  { saved === 'bookmark' && setSavedLocations(
    [...savedLocations, {
      name: locationName, 
      temp: temp, 
      region: locationRegion, 
      country: locationCountry, 
      icon: conditionIcon, 
      text: conditionText,
    } ])
  }
  { saved === 'bookmark_added' && removeLocation(locationName)}
}
const deleteSaved: React.MouseEventHandler<HTMLButtonElement> = (event) => {
  const target = event.target as HTMLButtonElement;
  if (target && target.id) {
    let filterSaved = savedLocations.filter(location => location.name !== target.id);
    setSavedLocations(filterSaved);
    setSaved('bookmark')
  }
};


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

        <Route path={`/location/${locationName}`} element={<FocusCard temp={temp}
         locationName={locationName}  locationRegion={locationRegion} conditionText={conditionText}
         conditionIcon={conditionIcon} locationCountry={locationCountry} toggleSaved={toggleSaved} saved={saved}/>}
         />
        <Route path='/saved-locations' element={<SavedLocations deleteSaved={deleteSaved} savedLocations={savedLocations} /> } />
        <Route path="/404" element={<PageNotFound/>}/>
        <Route path="*" element={<Navigate to= "/404"/>}/>
      </Routes>
    </div>
  )
}


export default App;