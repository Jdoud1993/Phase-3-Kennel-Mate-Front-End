import React from "react";

function AnimalCard({animal}) {

    const animalColors = animal.colors.map((color) => <li key={color}>{color}</li>)

    return (
        <div className="animal-card">
            <img src={animal.image} alt={animal.name}></img>
            <h3>Name: {animal.name}</h3>
            <h4>Species: {animal.species}</h4>
            <h4>Breed: {animal.breed}</h4>
            <h4>Sex: {animal.sex}</h4>
            <h4>Colors:</h4>
            <ul>
                {animalColors}
            </ul>
        </div>
    )
}

export default AnimalCard