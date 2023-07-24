import React from "react";

interface Props {
  name: string;
  region: string;
  country: string;
  conditionText: string;
  conditionIcon: string;
  temp:number;
  savedLocations:string[] ;
}

function SavedLocations(props: Props) {

const allSaved = props.savedLocations.map(place => {
  return (

<div className='saved-card'> 
  <h1>{props.name}, {props.region}, {props.country} </h1>
  <h1>{props.temp} °F</h1>
  <img src={props.conditionIcon}/>
  <h1>{props.conditionText}</h1>
</div>

  )
})

    return (

<div className="saved-container">
{allSaved}
</div>
 )
}

export default SavedLocations;