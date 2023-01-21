import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./Navbar"
import Home from "./Home"


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
      </Switch>
      <div id="footer">
        
      </div>
    </>
  );
}

export default App;
