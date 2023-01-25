import React from "react";
import DeleteButton from "./DeleteButton";

function AnimalCard({animal}) {

   

    return (
        <div className="animal-card">
            <img className="animal-img" src={animal.image} alt={animal.name}></img>
            <h3>Name: {animal.name}</h3>
            <h4>Species: {animal.species}</h4>
            <h4>Breed: {animal.breed}</h4>
            <h4>Sex: {animal.sex}</h4>
            <DeleteButton/>
        </div>
    )
}

export default AnimalCard