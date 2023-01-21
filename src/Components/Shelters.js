import React from "react";
import ShelterCard from "./ShelterCard"

function Shelters({shelters}) {

    const shelterList = shelters.map((shelter) => <ShelterCard key={shelter.id} shelter={shelter}/>)

    return (
        <div id="shelter-disp">
            {shelterList}
        </div>
    )

}

export default Shelters