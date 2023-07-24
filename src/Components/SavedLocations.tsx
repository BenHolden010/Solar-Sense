import React from "react";
import { getCity } from '../ApiCalls'
import { NavLink } from "react-router-dom";

interface Props {
  savedLocations:any ;
}

function SavedLocations(props: Props) {

  let all = props.savedLocations.map(location => {
 
    return (

      <div className='saved-card'> 
        <h1>{location.name}, {location.region}, {location.country} </h1>
        <h1>{location.temp} °F</h1>
        <img src={location.icon}/>
        <h1>{location.text}</h1>
      </div>
    )
  })

return (
<div className="saved-container">
<NavLink to='/'>
   <button>Home</button>
</NavLink>
{all}
</div>

 )
}

export default SavedLocations;