import React from "react";

import Title from "./Components/Title";
import CardComponent from "./Components/CardComponent";

function Destination(){

    return(
        <div className="destination">
        <Title title={<h1>Visita le citta piu belli del mondo</h1>}/>
        <CardComponent/>
        </div>
    )
}
export default Destination;