import React from "react";
import { getCity } from '../ApiCalls'

interface Props {
  savedLocationName: string;
  savedRegion: string;
  savedCountry: string;
  savedConditionText: string;
  savedConditionIcon: string;
  savedTemp:number;
  savedLocations:any ;
  location: any;
}

function SavedLocations(props: Props) {

  let all = props.savedLocations.map(location => {
    console.log(location, "LOCATION")
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
{all}
</div>

 )
}

export default SavedLocations;