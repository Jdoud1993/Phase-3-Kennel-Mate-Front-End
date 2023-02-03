import React from "react";
import AnimalCard from "./AnimalCard";

function Animals({onDeleteAnimal, animals}) {
    
    const animalList = animals.map((animal) => <AnimalCard key={animal.id} animal={animal} onDeleteAnimal={onDeleteAnimal}/>)

    return (
        <div>
            <h1>Animals:</h1>
            <div id="animal-disp">
                {animalList}
            </div>
        </div>
    )
}

export default Animals