import React from "react";

function ShelterCard({shelter}) {
    return (
        <div className="shelter-card">
            <img className="shelterimg" src={shelter.image} alt={shelter.name}></img>
            <h3>{shelter.name}</h3>
            <h4>Contact Information:</h4>
            <h5>Phone Number: {shelter.phone}</h5>
            <h5>Email Address: {shelter.email}</h5>
        </div>
    )
}

export default ShelterCard