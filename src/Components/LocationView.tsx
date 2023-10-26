import { useEffect } from 'react';
import { DayCard } from './DayCard';
import './LocationView.css'
import { NavLink, useParams } from 'react-router-dom'

type LocationViewProps = {
  days?: Days[]; // Make 'days' prop optional
  temp: number;
  locationName: string;
  conditionText: string;
  conditionIcon: string;
  locationRegion: string;
  locationCountry: string;
  toggleSaved: ()=>void;
  saved: string;
  selectLocation: (name: string) => void;
};

type Days = {
  date: string;
  day: {
    maxtemp_f: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
    }
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
  hour: Hours[];
}

type Hours = {
  time: string;
  condition: {
    text: string;
    icon: string;
  }
}

const LocationView = ({ days, temp, locationName, conditionText, conditionIcon, locationRegion, toggleSaved, saved, locationCountry, selectLocation}: LocationViewProps) => {
  let location = `${useParams().locationName},${useParams().locationRegion}`
  // console.log(useParams())
  // console.log('hello')
  // console.log(locationName)
  useEffect(()=>{
      selectLocation(location)
  },[])

  let displayedDays = days?.map(day=>{
    return (
      <DayCard
      key={day.date}
      date={day.date}
      maxtemp_f={day.day.maxtemp_f}
      mintemp_f={day.day.mintemp_f}
      totalprecip_in={day.day.totalprecip_in}
      totalsnow_cm={day.day.totalsnow_cm}
      daily_chance_of_rain={day.day.daily_chance_of_rain}
      daily_chance_of_snow={day.day.daily_chance_of_snow}
      conditionText={day.day.condition.text}
      conditionIcon={day.day.condition.icon}
      sunrise={day.astro.sunrise}
      sunset={day.astro.sunset}
      hour={day.hour}
      />
      )
    })
    
  return (
    <section className="location-section">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className="focus-section-nav">
      <NavLink to="/">  
      <button className="back-button"><span className="material-symbols-outlined">arrow_back</span>
      </button>
      </NavLink>
      </div>
      <div className='location-view'>
        <h1 className='focus-card-title'>{locationName}, {locationRegion}, {locationCountry === "United States of America" ? "United States" : locationCountry} </h1>
        <div className='current-conditions' >
          <h1 className="focus-temp">Current Conditions: {temp} °F</h1>
          <img src={conditionIcon} className="img" />
          <h1>{conditionText}</h1>
        </div>
        <div className='days-container'>
          {displayedDays}
        </div>
        <button className="save-button" onClick={()=>toggleSaved()}><h1>Save Location</h1><span className="material-symbols-outlined">{saved}</span>
        </button>
      </div>
    </section>
  )
}

export default LocationView