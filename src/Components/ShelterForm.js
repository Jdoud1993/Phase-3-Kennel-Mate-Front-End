import React, {useState} from "react"; 
import {useHistory} from "react-router-dom"

function ShelterForm ({onAddShelter}) {
    const history = useHistory()
    const [formData, setFormData] = useState({
        name:"",
        address:"",
        email:"",
        phone:"",
        image:"",
    })

    function handleSubmit (e) {
        e.preventDefault();
        if(formData.name ==="" || formData.address === "" || formData.email === "" || formData.phone === "" || formData.image === "") {
            return window.alert("Please fill in all fields below!")
        }
        window.alert("Shelter added!")
        fetch("http://localhost:9292/shelters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newShelter => {
            onAddShelter(newShelter)
            history.push("/Shelters")
        })
        setFormData({
            name:"",
            address:"",
            email:"",
            phone:"",
            image:"",
        })
    }
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }
    
    return(
        <div>
            <h1 className="add-title">Please Add Shelter</h1>
            <form id="addShelter" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    value={formData.address}
                    placeholder="Address"
                />
                <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    placeholder="Phone Number"
                />
                <input
                    type="text"
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
                    placeholder="Image URL"
                />
                <button id="submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ShelterForm