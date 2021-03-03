import React, { Component } from 'react';

import Table from './components/table';

import './bootstrap.min.css';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="container">
        <h1 className="text-center">
          Todo list 
        </h1>
        <Table/>
      </div >
    );
  };
}

export default App;
