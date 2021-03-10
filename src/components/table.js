import Axios from 'axios';
import { 
    BrowserRouter as Router, 
    Link
  } from "react-router-dom";

import React, { Component } from 'react';
import TableContent from './tableContent.js';

class Table extends Component{

    state = {
        task : [],
    };

    url = "https://lltodoapi.000webhostapp.com/get/";

    componentDidMount(){

        Axios.get(this.url)
        .then( response => {
            const task = response.data.response;
            //console.log(task);
            this.setState( { task } )
        })

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
                                <form onSubmit="" className="form-inline justify-content-center align-items-center">
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
        );}
}

export default Table;