import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/index";

function App() {
  return (
      <Router>
        <Nav />
          <Switch>
    
          {/* <Route exact path="/" component={Home} />

              <Route exact path="/search" component={Search} /> */}
        
          </Switch>
      </Router>

 
  );
}

export default App;
