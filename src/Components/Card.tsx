import React from "react";

interface Props {
location: string;
temp: number;
}

const Card = (props: Props) => {

  return (
      <div className='card'>
        <h1>{props.location}</h1>
        <h1>{props.temp}</h1>
      </div>
  ) 
}

export default Card