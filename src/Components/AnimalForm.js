import React, {useState} from "react";
import ShelterSubmission from "./ShelterSubmission"

function AnimalForm({onAddAnimal, shelters}) {
    
    const [formData, setFormData] = useState({
        species:"",
        breed:"",
        name:"",
        sex:"Select",
        image:"",
        age:"",
        shelter_id:"Select"
    })

    const shelterList = shelters.map((shelter) => <ShelterSubmission key={shelter.id} shelter={shelter} />)

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
        if(formData.species ==="" || formData.breed === "" || formData.name === "" || formData.sex === "Select" || formData.age === "" || formData.image === "" || formData.shelter_id === "Select") {
            return window.alert("Please fill in all fields below, make a selection for sex, and make a selection for the shelter!")
        }
        window.alert("Animal added!")
        fetch("http://localhost:3001/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newAnimal => onAddAnimal(newAnimal))
        setFormData({
            species:"",
            breed:"",
            name:"",
            sex:"Select",
            age:"",
            image:"",
            shelter_id:"Select"
        })
    }
    
    return(
        <div>
            <h1 id="add-title">Please Add Animal</h1>
            <form id="addAnimal" onSubmit={handleSubmit}>
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
                    <option value="Select">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select name="shelter_id" value={formData.shelter_id} onChange={handleChange}>
                    <option value="Select">Select Shelter</option>
                    {shelterList}
                </select>
                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AnimalForm