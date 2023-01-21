import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shelters from "./Shelters";
import Animals from "./Animals";
import Form from "./Form"


function App() {
  return (
    <>
      <div id="header">

      </div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path ="/Shelters">
          <Shelters/>
        </Route>
        <Route exact path ="/Animals">
          <Animals/>
        </Route>
        <Route exact path ="/Form">
          <Form/>
        </Route>
      </Switch>
      <div id="footer">

      </div>
    </>
  );
}

export default App;
