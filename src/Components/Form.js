import React, {useState} from "react";

function Form() {
    
    const [formData, setFormData] = useState({
        species:"",
        breed:"",
        name:"",
        sex:"",
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
        console.log(formData)
    }
    
    return(
        <div id="addAnimal">
            <form onSubmit={handleSubmit}>
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
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form