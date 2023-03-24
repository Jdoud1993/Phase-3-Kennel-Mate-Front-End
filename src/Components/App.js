import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import BlueNavbar from "./BlueNavbar";
import Home from "./Home";
import Shelters from "./Shelters";
import Animals from "./Animals";
import AnimalDetail from "./AnimalDetail"
import AnimalForm from "./AnimalForm";
import Footer from "./Footer"




function App() {

const [shelters, setShelters] = useState([]);
const [animals, setAnimals] = useState([]);

useEffect(() => {
  fetch("http://localhost:9292/shelters")
  .then(res => res.json())
  .then(data => {
    setShelters(data);
  },)
}, [])

useEffect(() => {
  fetch("http://localhost:9292/animals")
  .then(res => res.json())
  .then(data => {
    setAnimals(data);
  },)
}, [])

function handleAddAnimal(newAnimal) {
  setAnimals(...animals, newAnimal)
  
}

function handleDeleteAnimal(deletedAnimal) {
  const updatedAnimals = animals.filter((animal) => animal.id !== deletedAnimal.id)
  setAnimals(updatedAnimals)
}

  return (
    <div id="body"> 
      <div>
        <BlueNavbar/>
      </div>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path ="/Shelters">
            <Shelters shelters={shelters}/>
          </Route>
          <Route exact path ="/Animals">
            <Animals animals={animals} onDeleteAnimal={handleDeleteAnimal}/>
          </Route>
          <Route exact path ="/Animals/:id">
            <AnimalDetail />
          </Route>
          <Route exact path ="/AnimalForm">
            <AnimalForm onAddAnimal={handleAddAnimal}/>
          </Route>
        </Switch>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
