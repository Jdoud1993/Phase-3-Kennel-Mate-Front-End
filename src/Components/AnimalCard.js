import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// function AnimalCard(props) {
//     console.log(props)
    
function AnimalCard({onDeleteAnimal, animal}){
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
            <Link className="see-more" exact to={`/Animals/${animal.id}`}>See More</Link>
            <Button onClick={handleClick} variant="danger">Delete</Button>
        </div>
    )
}

export default AnimalCard