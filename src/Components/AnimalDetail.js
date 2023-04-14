import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ShelterSubmission from "./ShelterSubmission";


function AnimalDetail({shelters, onUpdateAnimal}) {
    const [animal, setAnimal] = useState(null);
    const [update, setUpdate] = useState(false);
    const [formData, setFormData] =useState({
        name:"",
        species:"",
        breed:"",
        sex:"",
        age:"",
        image:"",
        shelter_id:""
    })
    const {id} = useParams()
    

    const shelterList = shelters.map((shelter) => <ShelterSubmission key={shelter.id} shelter={shelter} />)

    useEffect(() => {
        fetch(`http://localhost:9292/animals/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setAnimal(data)
        })
    }, [id])

    function handleClick () {
        if(update === false){
            setUpdate(true)
            setFormData({
                name:`${animal.name}`,
                species:`${animal.species}`,
                breed:`${animal.breed}`,
                sex:`${animal.sex}`,
                age:`${animal.age}`,
                image:`${animal.image}`,
                shelter_id:`${animal.shelter_id}`
            })
        } else {
            setUpdate(false)
        }
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/animals/${animal.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((updatedAnimal) => {
            onUpdateAnimal(updatedAnimal)
            setAnimal(updatedAnimal)
            setUpdate(false)
        })
        
    }

    if (!animal) return <h2>Loading...</h2>

    else if (update === false)
        return (
            <div className="animal-detail">
            <img className="animal-img" src={animal.image} alt={animal.name}></img>
                <h3>Name: {animal.name}</h3>
                <h4>Species: {animal.species}</h4>
                <h4>Breed: {animal.breed}</h4>
                <h4>Sex: {animal.sex}</h4>
                <h4>Age: {animal.age} yr</h4>
                <h5>Shelter: {animal.shelter.name}</h5>
                <button onClick={handleClick}>Update Animal</button>
            </div>
        )
    else if (update === true)
      
        return (
            <div>
                <div className="animal-detail">
                <img className="animal-img" src={animal.image} alt={animal.name}></img>
                    <h3>Name: {animal.name}</h3>
                    <h4>Species: {animal.species}</h4>
                    <h4>Breed: {animal.breed}</h4>
                    <h4>Sex: {animal.sex}</h4>
                    <h4>Age: {animal.age} yr</h4>
                    <h5>Shelter: {animal.shelter.name}</h5>
                    <button onClick={handleClick}>Close Update</button>
                </div>
                <form id="updateAnimal" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
                    placeholder="Image URL"
                    />
                    <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Name"
                    />
                    <input
                    type="text"
                    name="species"
                    onChange={handleChange}
                    value={formData.species}
                    placeholder="Species"
                    />
                    <input
                    type="text"
                    name="breed"
                    onChange={handleChange}
                    value={formData.breed}
                    placeholder="Breed"
                    />
                    <input
                        type="text"
                        name="age"
                        onChange={handleChange}
                        value={formData.age}
                        placeholder="Age in Years"
                    />
                    <select name="sex" value={formData.sex} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select name="shelter_id" value={formData.shelter_id.name} onChange={handleChange}>
                        <option value={animal.shelter.name}>{animal.shelter.name}</option>
                        {shelterList}
                    </select>
                    <button id="submit" type="submit">Submit</button>
                </form>
            </div>
        )
}

export default AnimalDetail