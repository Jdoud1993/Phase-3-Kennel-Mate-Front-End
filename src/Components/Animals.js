import React from "react";
import AnimalCard from "./AnimalCard";

function Animals({onDeleteAnimal, animals}) {
    
    const animalList = animals.map((animal) => <AnimalCard key={animal.id} animal={animal} onDeleteAnimal={onDeleteAnimal}/>)

    return (
        <div id="animal-disp">
            {animalList}
        </div>
    )
}

export default Animals