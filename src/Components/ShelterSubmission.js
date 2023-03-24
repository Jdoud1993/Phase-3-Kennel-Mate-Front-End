import React from "react"; 

function ShelterSubmission ({shelter}) {
    return <option value={shelter.id}>{shelter.name}</option>   
}

export default ShelterSubmission