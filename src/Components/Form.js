import React, {useState} from "react";

function Form({onAddAnimal}) {
    
    const [formData, setFormData] = useState({
        species:"",
        breed:"",
        name:"",
        sex:"Select",
        image:"",
    })

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
        if(formData.species ==="" || formData.breed === "" || formData.name === "" || formData.sex === "Select" || formData.image === "") {
            return window.alert("Please fill in all fields below and make a selection for sex!")
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
            image:"",
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
                <select name="sex" value={formData.sex} onChange={handleChange}>
                    <option value="Select">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form