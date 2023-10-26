import './LocationSelect.css'
import {NavLink} from 'react-router-dom'

// interface Props {
// locationName: string;
// locationRegion: string;
// locationCountry: string;
// temp: number;
// conditionText: string;
// conditionIcon: string;
// }

type CardProps = {
  locationName: string;
  locationRegion: string;
  locationCountry: string;
};

const LocationSelect = ({ locationName, locationRegion, locationCountry }: CardProps)  => {

  return (
      <NavLink className='location-select' to={`/location/${locationName}/${locationRegion}`}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <h1 className='location-info'>{locationName}, {locationRegion}, {locationCountry === "United States of America" ? "United States" : locationCountry} </h1>
        <button className="view-location-button"><span className="material-symbols-outlined">
        search
        </span></button>
      </NavLink>
    
  ) 
}

export default LocationSelect