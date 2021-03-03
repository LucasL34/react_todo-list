import React, { Component } from 'react';
import TableContent from './tableContent.js';

import Axios from 'axios';


class Table extends Component{

    render(){
        return(
            <table className="table table-dark">
                <thead> 
                    <tr>
                        <th scope="col"> Title </th>
                        <th scope="col"> Project name </th>
                        <th scope="col"> Comment </th>
                        <th scope="col"> Date </th>
                        <th scope="col">  </th>
                    </tr>
                </thead>
                <tbody>
                    <TableContent />
                </tbody>
            </table>
        );}
}

export default Table;