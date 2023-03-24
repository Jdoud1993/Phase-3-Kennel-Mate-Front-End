import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


function AnimalDetail() {
    const [animal, setAnimal] = useState(null);
    const {id} = useParams() 
    

    useEffect(() => {
        fetch(`http://localhost:9292/animals/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setAnimal(data)
        })
    }, [id])

    if (!animal) return <h2>Loading...</h2>

    return (
        <div className="animal-detail">
           <img className="animal-img" src={animal.image} alt={animal.name}></img>
            <h3>Name: {animal.name}</h3>
            <h4>Species: {animal.species}</h4>
            <h4>Breed: {animal.breed}</h4>
            <h4>Sex: {animal.sex}</h4>
            <h4>Age: {animal.age} yr</h4>
            <h5>Shelter: {animal.shelter.name}</h5>
        </div>
    )
}

export default AnimalDetail