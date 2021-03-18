import React from 'react';

import Table from './table';
import Nav from './nav';

function Home(){

    return(
        <React.Fragment>
            <Nav />
            <h1 className="text-center my-4">
                <span id="title">
                    Todo list 
                </span>
                <span className="text-muted" id="nickname"> 
                    username
                </span>
            </h1>
            <Table/>
        </React.Fragment>   
    )
    
}

export default Home;