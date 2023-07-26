import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCity }from './ApiCalls'
import { useState, useEffect } from 'react';
import Card from "./Components/Card";
import FocusCard from "./Components/Focus"
import Nav from "./Components/Nav"
import {Routes, Route, NavLink} from 'react-router-dom'
import ServerError from './Components/ServerError';
import SavedLocations from './Components/SavedLocations';
import { clear } from 'console';
import SavedContext from './Components/savedContext';


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
  const [locations, setLocations] =useState<{}[]>([])
  const [serverError, setServerError] = useState<boolean>(false)
  const [savedLocations, setSavedLocations] = useState<LocationData[]>(
    JSON.parse(sessionStorage.getItem("SESSION_STORAGE_KEY") ||'[]'
  ));
  const [saved, setSaved] = useState('bookmark');


  const [savedLocationName, setSavedLocationName] = useState<string>("")



  useEffect(() => {
    const data = window.sessionStorage.getItem("SESSION_STORAGE_KEY")
    // console.log('DATA', data)
    if (data !== null) setSavedLocations(JSON.parse(data))
  },[])


  useEffect(() => {
    if(savedLocations) {
      window.sessionStorage.setItem("SESSION_STORAGE_KEY", JSON.stringify(savedLocations))
    }
  }, [savedLocations])

  // const [savedIdentity, setSavedIdentity] = useState(JSON.parse(sessionStorage.getItem("savedIdentity")) || [])


  function clearInputs() {
    if(!input){
      return(
        <div className="weather-card-container"></div>
      )
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

//   function addLocation() {
//     setSavedLocations(
//       [...savedLocations, {
//         name: locationName, 
//         temp: temp, 
//         region: locationRegion, 
//         country: locationCountry, 
//         icon: conditionIcon, 
//         text: conditionText
//       } ])
// }

const removeLocation = (name) => {
  const filteredSavedLocations = savedLocations.filter((location) => location.name !== name);
  setSavedLocations(filteredSavedLocations);
};
  // useEffect(() => {
  //   {input && searchCities(input)
  //   .then(data => {
  //     setLocations(data)
  //     setServerError(false)
  //   })
  //   .catch(error => setServerError(true))
  //   }
  // }, [input])

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

  
//    useEffect(() => {
    
//      savedLocations.map(location => {
// console.log(location)
//     {savedLocations && getCity(location?.name)
//     .then(data => {
//       setSavedTemp(data?.current?.temp_f)
//       setSavedLocationName(data?.location?.name)
//       setSavedLocationRegion(data?.location?.region)
//       setSavedLocationCountry(data?.location?.country)
//       setSavedConditionText(data?.current?.condition?.text)
//       setSavedConditionIcon(data?.current?.condition?.icon)
//     })
//     .catch(error => setServerError(true))
//   }
//     })
//   }, [savedLocations])

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
      text: conditionText
    } ])
  }
  { saved === 'bookmark_added' && removeLocation(locationName)}
}

  return (
    <SavedContext.Provider value={saved}>
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
        <Route path='/saved-locations' element={<SavedLocations clearInputs={clearInputs} savedLocations={savedLocations} /> } />
      </Routes>
    </div>
    </SavedContext.Provider>
  )
}


export default App;