import { NavLink } from "react-router-dom";
import './savedLocations.css'

interface LocationData {
  name: string;
  temp: number;
  region: string;
  country: string;
  icon: string;
  text: string;
}

interface Props {
  savedLocations: LocationData[];
  deleteSaved: React.MouseEventHandler<HTMLButtonElement>;
}

function SavedLocations(props: Props) {

  let all = props.savedLocations.map(location => {
 
    return (

      <div className='saved-card' > 
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <h1>{location.name}, {location.region}, {location.country === "United States of America" ? "United States" : location.country}</h1>
        <h1 className="saved-temp">{location.temp} °F</h1>
        <img src={location.icon}/>
        <h1>{location.text}</h1>
        <button className="remove-saved" onClick={props.deleteSaved} ><span id={location.name} className="material-symbols-outlined">
close
</span></button>
      </div>
    )
  })

return (
  <section className="saved-section">

     <NavLink to='/'>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <button className="home-button"><span className="material-symbols-outlined">
home
</span></button>
    </NavLink>

    {all.length? 
    <div className="saved-container"> 
    {all}
    </div> 
    : <p className="no-saved">No Saved Locations</p>}
    
</section>

 )
}

export default SavedLocations;