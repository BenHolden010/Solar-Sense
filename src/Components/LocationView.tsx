// import { DayCard } from './DayCard';
import { DayCard } from './DayCard';
import './LocationView.css'
import { NavLink } from 'react-router-dom'

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

const LocationView = ({ days, temp, locationName, conditionText, conditionIcon, locationRegion, toggleSaved, saved, locationCountry }: LocationViewProps) => {

  let displayedDays = days?.map(day=>{
    return (
      <DayCard
      date={day.date}
      />
      )
    })
    console.log(days)
    
  return (
    <section className={`focus-section`}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <div className="focus-section-nav">
      <NavLink to="/">  
      <button className="back-button"><span className="material-symbols-outlined">arrow_back</span>
      </button>
      </NavLink>
      </div>
      <div className='focus-card'>
        <h1 className='focus-card-title'>{locationName}, {locationRegion}, {locationCountry === "United States of America" ? "United States" : locationCountry} </h1>
        <p className="focus-temp">Current Temp: {temp} °F</p>
        <img src={conditionIcon} className="img" />
        <h1>{conditionText}</h1>
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