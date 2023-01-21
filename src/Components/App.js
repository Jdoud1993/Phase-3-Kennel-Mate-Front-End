import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shelters from "./Shelters";
import Animals from "./Animals";
import Form from "./Form"


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
    <div id="body">
      <div id="header">
        <h1>Header</h1>
        <Navbar/>
      </div>
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
  );
}

export default App;
