import React  from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom";

import Form from './components/form';
import Home from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  
    return (
      <Router>
          <Switch>
            <Route path="/user/">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }

export default App;
