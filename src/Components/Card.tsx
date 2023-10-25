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

const Card = (props: Props) => {

  return (
      <NavLink className='card' to={`/location/${props.locationName}`}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <h1 className='card-text'>{props.locationName}, {props.locationRegion}, {props.locationCountry === "United States of America" ? "United States" : props.locationCountry} </h1>
        <button className="view-location-button"><span className="material-symbols-outlined">
        search
        </span></button>
      </NavLink>
    
  ) 
}

export default Card