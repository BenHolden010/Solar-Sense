import './Focus.css'
import { NavLink } from 'react-router-dom'

interface Props {
  locationName: string;
  locationRegion: string;
  locationCountry: string;
  conditionText: string;
  conditionIcon: string;
  temp: number;
  saved: string;
  toggleSaved: () => any;
}

const FocusCard = (props: Props) => {

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
        <h1 className='focus-card-title'>{props.locationName}, {props.locationRegion}, {props.locationCountry === "United States of America" ? "United States" : props.locationCountry} </h1>
        <p className="focus-temp">{props.temp} °F</p>
        <img src={props.conditionIcon} className="img" />
        <h1>{props.conditionText}</h1>
        <button className="save-button" onClick={props.toggleSaved}><h1>Save Location</h1><span className="material-symbols-outlined">{props.saved}</span>
        </button>
      </div>
    </section>
  )
}

export default FocusCard