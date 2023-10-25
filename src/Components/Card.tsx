import './Card.css'
import {NavLink} from 'react-router-dom'

interface Props {
locationName: string;
locationRegion: string;
locationCountry: string;
temp: number;
conditionText: string;
conditionIcon: string;
}

type CardProps = {
  days?: Days[]; // Make 'days' prop optional
  temp: number;
  locationName: string;
  conditionText: string;
  conditionIcon: string;
  locationRegion: string;
  locationCountry: string;
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

const Card = ({ days, temp, locationName, conditionText, conditionIcon, locationRegion, locationCountry }: CardProps)  => {

  return (
      <NavLink className='card' to={`/location/${locationName}`}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <h1 className='card-text'>{locationName}, {locationRegion}, {locationCountry === "United States of America" ? "United States" : locationCountry} </h1>
        <button className="view-location-button"><span className="material-symbols-outlined">
        search
        </span></button>
      </NavLink>
    
  ) 
}

export default Card