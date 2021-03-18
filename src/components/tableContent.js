import React, { Component } from 'react';
//import Axios from 'axios';

class TableContent extends Component{

    task_btn = React.createRef();

    task_done = e => {
        e.preventDefault();
        /*
        let $btn = e.target[0]; // select first child 

        let id = $btn.getAttribute("data-id");

        let detele_url = "https://lltodoapi.000webhostapp.com/delete/index.php?query=true&id=" + id;

        Axios.delete(detele_url)
        .then( response =>{
            console.log(response.data);
        } )*/
    }

    innerTasks = () => {
        var task = this.props.info.task;

        if( !task || task.length === 0) return;

        return (
            <React.Fragment>{
                task.map( info =>{
                    return(
                        <tr key={info.task_id} className={"table-"+info.task_priority}>
                            <th scope="row"> {info.task_title} </th>
                            <td> {info.task_name} </td>
                            <td> {info.task_comment} </td>
                            <td> {info.task_created} </td> 
                            <td className="justify-content-center"> 
                                <form onSubmit={this.task_done} className="form-inline justify-content-center align-items-center">
                                    <button className="btn btn-success" data-id={info.task_id}> Done </button>
                                </form>
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
                { this.innerTasks() }
            </React.Fragment>
        );
    }
}

export default TableContent;