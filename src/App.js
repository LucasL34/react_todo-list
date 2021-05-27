import React  from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from "react-router-dom"

import Home from './pages/home'
import newTask from './pages/newTask'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
    
    return (
      <Router>
          <Switch> 

            <Route component={ newTask } path="/newTask/"/>
            <Route component={ Home } path="/" />

          </Switch>
      </Router>
    )
  }

export default App
