import React from "react";
import Button from 'react-bootstrap/Button';

function AnimalCard({onDeleteAnimal, animal}) {

   function handleClick() {
        fetch(`http://localhost:3001/animals/${animal.id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => onDeleteAnimal(animal))
   }

    return (
        <div className="animal-card">
            <img className="animal-img" src={animal.image} alt={animal.name}></img>
            <h3>Name: {animal.name}</h3>
            <h4>Species: {animal.species}</h4>
            <h4>Breed: {animal.breed}</h4>
            <h4>Sex: {animal.sex}</h4>
            <Button onClick={handleClick} variant="danger">Delete</Button>
        </div>
    )
}

export default AnimalCard