import React, { Component } from 'react';

import Table from './table';
import Nav from './nav';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Nav />
                <h1 className="text-center my-4">
                    <span id="title">
                        Todo list 
                    </span>
                    <span className="text-muted" id="nickname"> 
                        Rodrigazo 
                    </span>
                    
                </h1> { /* .text-muted */}
                { /* - nombre de usuario */ }
                <Table/>
            </React.Fragment>   
        )
    }
}

export default Home;