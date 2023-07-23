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
sunrise: [];
sunset:any;
}


const FocusCard = (props: Props) => {


    let forcastDay = props.sunrise.map(day => {
      
       return (
        <p>{day.astro?.sunrise}</p>
       )
    })

    // console.log(props.sunrise[0])
  return (
    
      <div className='focus-card'> 
        <h1>{props.locationName}, {props.locationRegion}, {props.locationCountry} </h1>
        <h1>{props.temp} °F</h1>
        <img src={props.conditionIcon}/>
        <h1>{props.conditionText}</h1>
         {/* <p>{forcastDay}</p>  */}
        {/* <p>{props.sunset}</p> */} */
       
        <NavLink to="/">  <button>Back</button> </NavLink>
      </div>
    
  ) 
}

export default FocusCard