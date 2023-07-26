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
saved: string;

toggleSaved: () => any;
}

const FocusCard = (props: Props) => {
  // console.log(props.saved)
  const value = useContext(SavedContext)
  return (
   <section className={`focus-section`}>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <NavLink to="/">  <button className="back-button"><span className="material-symbols-outlined">
        arrow_back</span>
        </button> 
      </NavLink>

      <div className='focus-card'> 

        <h1>{props.locationName}
         , {props.locationRegion}, {props.locationCountry === "United States of America" ? "United States" : props.locationCountry} </h1> 
        
        <p className="focus-temp">{props.temp} °F</p>
        <img src={props.conditionIcon} className="img"/>
        <h1>{props.conditionText}</h1> 
      
        <button className="save-button" onClick={props.toggleSaved}><span className="material-symbols-outlined">{props.saved}</span>
        </button>
        </div>
       
     </section>
  ) 
}

export default FocusCard