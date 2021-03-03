import React, { Component } from 'react';

class TableContent extends Component{
    render(){
        return(
            <React.Fragment>
                <tr> { /* el className varia segun la prioridad */}
                    <th> Terminar todolist </th>
                    <td> todolist React.js </td>
                    <td> Practicar </td>
                    <td> 
                        <button className="btn btn-primary" data-id="1"> Done </button>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default TableContent;