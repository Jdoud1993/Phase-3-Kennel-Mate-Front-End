import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import BlueNavbar from "./BlueNavbar";
import Home from "./Home";
import Shelters from "./Shelters";
import Animals from "./Animals";
import AnimalDetail from "./AnimalDetail"
import Form from "./Form";
import Footer from "./Footer"



function App() {

const [shelters, setShelters] = useState([]);
const [animals, setAnimals] = useState([]);

useEffect(() => {
  fetch("http://localhost:3001/shelters")
  .then(res => res.json())
  .then(data => {
    setShelters(data);
  },)
}, [])

useEffect(() => {
  fetch("http://localhost:3001/animals")
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
    <div> 
      <div>
        <BlueNavbar/>
      </div>
      <div id="body">
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
          <Route exact path ="/Form">
            <Form onAddAnimal={handleAddAnimal}/>
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
