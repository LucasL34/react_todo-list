import React, { Component } from 'react';
import Axios from 'axios';
import { 
    BrowserRouter as Router, 
    Link
  } from "react-router-dom";


import TableContent from './tableContent.js';

class Table extends Component{

    url = "http://l34todolist.atwebpages.com/get/";
    
    state = {
        task : [],
    };

    componentDidMount(){
        Axios.get( this.url )
        .then( res => res.json() )
        .then( response => {
            const task = response.data.response;
            console.log(task);
            this.setState( { task } )
        })
        .catch(err=> console.error(err))
    }

    render(){
        return(
            <div className="table-responsive container-md">
                <table className="table table-md table-dark align-midle">
                    <thead> 
                        <tr>
                            <th scope="col"> Title task</th>
                            <th scope="col"> Project </th> 
                            <th scope="col"> Comment </th>
                            <th scope="col"> Date </th>
                            <th scope="col">
                                <form onSubmit={ e => e.preventDefault() } className="form-inline justify-content-center align-items-center">
                                    <Router>
                                        <Link to="/login" className="btn btn-warning">
                                            New 
                                        </Link>
                                    </Router>
                                </form>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-dark">
                        <TableContent 
                            info = { this.state }
                        />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;