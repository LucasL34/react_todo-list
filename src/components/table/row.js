import React from 'react'
import { Link } from "react-router-dom"

function Row(props){

    const { data, deleteTask, exampleTask = true } = props

    var taskDone = e => {

        e.preventDefault();
        
        const localData = JSON.parse(localStorage.getItem("ltodolist-data")),

            $btn = e.target,

            tdParent = $btn.parentElement.parentElement, // get parent div 

            dataToFind = transformElementToObject(tdParent), // extract data from tr element

            index = localData.task.indexOf(dataToFind) // find index from element

        localData.task.splice(index, 1)  // remove elemento from array 

        localStorage.setItem("ltodolist-data", JSON.stringify(localData)) // update data 

        deleteTask.function( !deleteTask.value ) // re render table 
    }

    const transformElementToObject = function($e){

        const l = $e.children.length - 1, // -1 = last child -> btn 
            
            id = $e.querySelector(".btn").getAttribute("data-id"),

            priority = $e.classList[0].split("-")[1] // "table-danger" -> "danger" 

        var template = [ // template 
            "name",
            "title",
            "comment"
        ], obj = {}

        obj["id"] = Number(id) // set id as Number 

        for (let i = 0; i < l; i++ ) {
            // set values 
            obj[template[i]] = $e.children[i].outerText
        }

        obj["priority"] = priority // create and set priority 

        return obj 
    }


    return <>
        {
            data.map( tasks => {
                const { id, title, name, comment, priority } = tasks 

                const submitExampleTask = 
                    <form onSubmit={ e => e.preventDefault() } className="form-inline justify-content-center align-items-center">
                        <Link to="/newTask" className="btn btn-primary">
                            Done 
                        </Link>
                    </form>
                
                ,
                
                submitTask = 
                    <form onSubmit={ taskDone } className="form-inline justify-content-center align-items-center" >
                        <button className="btn btn-success" data-id={ id }> 
                            Done 
                        </button>
                    </form>
                
                
                return(
                    <tr key={ id } className={ `table-${ !priority ? "secondary" : priority }` } >
                        <th scope="row"> { title } </th>
                        <td> { name } </td>
                        <td> { comment } </td>
                        <td className="justify-content-center"> 
                        {
                            !exampleTask ?
                                submitExampleTask
                            :
                                submitTask
                        }
                        </td>
                    </tr>
                )
            })
        }
    </>
}

export default Row