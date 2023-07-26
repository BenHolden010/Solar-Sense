// import React from "react";
import './Focus.css'
import {NavLink} from 'react-router-dom'
import SavedLocations from "./SavedLocations";
import { FunctionExpression } from "typescript";
import { useState, useContext } from "react";
import SavedContext from './savedContext';


interface Props {
locationName: string;
locationRegion: string;
locationCountry: string;
conditionText: string;
conditionIcon: string;
temp: number;
addLocation: () => any;
toggleSaved: () => any;
}

const FocusCard = (props: Props) => {
  const value = useContext(SavedContext)
  return (
   
      <div className={`focus-card ${value}`}> 
        <h1>{props.locationName}
         , {props.locationRegion}, {props.locationCountry} </h1> 
        <h1>{props.temp} °F</h1>
        <img src={props.conditionIcon}/>
        <h1>{props.conditionText}</h1> 
       
     
        <NavLink to="/">  <button>Back</button> </NavLink>
        <button className="save-button" onClick={props.toggleSaved}>save location</button>
      </div>
  ) 
}

export default FocusCard