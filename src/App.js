import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/home";
import newTask from "./views/newTask";

import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={newTask} path="/newTask/" />
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
