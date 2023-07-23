import React from "react";
import './Focus.css'
import {NavLink} from 'react-router-dom'
import SavedLocations from "./SavedLocations";
import { FunctionExpression } from "typescript";
import { useState } from "react";

interface Props {
locationName: string;
// locationRegion: string;
// locationCountry: string;
// temp: number;
// conditionText: string;
// conditionIcon: string;
// newLocation: string;
addLocation: () => any;
// savedLocations: [];
// setSavedLocations: (prev: []) => [];
}


const FocusCard = (props: Props) => {

  // const [savedLocations, setSavedLocations] = useState<[]>([])

  // function  addLocation() {
  //   // setSavedLocations([...props.savedLocations, props.newLocation])
  //   // setSavedLocations(props.prevLocations => […props.prevLocations, props.newLocation])
  //   setSavedLocations(props.newLocation)
  // }

  return (
    
      <div className='focus-card'> 
        <h1>{props.locationName}</h1>
        {/* , {props.locationRegion}, {props.locationCountry} </h1>
        <h1>{props.temp} °F</h1>
        <img src={props.conditionIcon}/>
        <h1>{props.conditionText}</h1> */}
         {/* <p>{forcastDay}</p>  */}
        {/* <p>{props.sunset}</p> */}
       
        <NavLink to="/">  <button>Back</button> </NavLink>
        <button onClick={props.addLocation}>save location</button>
      </div>
    
  ) 
}

export default FocusCard