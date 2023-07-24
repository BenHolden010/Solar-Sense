import React from "react";

interface Props {
  name: string;
}

function SavedLocations(props: Props) {

    return (
      <div>
    <h1>{props.name}</h1>
  </div>
 )
}

export default SavedLocations;