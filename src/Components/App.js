import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import BlueNavbar from "./BlueNavbar";
import Home from "./Home";
import Shelters from "./Shelters";
import Animals from "./Animals";
import Form from "./Form";



function App() {

const [shelters, setShelters] = useState([]);
const [animals, setAnimals] = useState([]);
const kennelMate = "http://localhost:3001/kennel-mate"

useEffect(() => {
  fetch(kennelMate)
  .then(res => res.json())
  .then(data => {
    setShelters(data.shelters);
    setAnimals(data.animals);
  },)
}, [])

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
            <Animals animals={animals}/>
          </Route>
          <Route exact path ="/Form">
            <Form/>
          </Route>
        </Switch>
        <div id="footer">
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
