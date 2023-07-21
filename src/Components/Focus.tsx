import React from "react";
import './Focus.css'
import {NavLink} from 'react-router-dom'

interface Props {
locationName: string;
locationRegion: string;
locationCountry: string;
temp: number;
conditionText: string;
conditionIcon: string;
}

const FocusCard = (props: Props) => {

  return (
    
      <div className='focus-card'> 
        <h1>{props.locationName}, {props.locationRegion}, {props.locationCountry} </h1>
        <h1>{props.temp} °F</h1>
        <img src={props.conditionIcon}/>
        <h1>{props.conditionText}</h1>
        <NavLink to="/">  <button>Back</button> </NavLink>
      </div>
    
  ) 
}

export default FocusCard