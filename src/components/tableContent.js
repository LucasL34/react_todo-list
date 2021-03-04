import React, { Component } from 'react';

class TableContent extends Component{

    function = () => {
        var task = this.props.info.task;

        return (
            <React.Fragment>{
                task.map( info =>{
                    return(
                        <tr key={info.task_id} className={"table-"+info.task_priority}>
                            <th className="" scope="row"> {info.task_title} </th>
                            <td> {info.task_name} </td>
                            <td> {info.task_comment} </td>
                            <td> {info.task_created} </td> 
                            <td className="justify-content-center"> 
                                <button className="btn btn-success" data-id={info.task_id}> Done </button>
                            </td>
                        </tr>
                    );
                }) 
            }</React.Fragment>
        );
    };

    render(){
        return(
            <React.Fragment>
                { this.function() }
            </React.Fragment>
        );
    }
}

export default TableContent;