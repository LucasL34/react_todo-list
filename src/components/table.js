import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import TableContent from './tableContent.js'

function Table(){

    const [ tasks, setTasks ] = useState([]),
        [ deleted, deleteThis ] = useState(false)

    useEffect( function(){

        getTask()

    }, [ deleted ]) 

    const getTask = () => {

        const localStorageData = JSON.parse(localStorage.getItem("ltodolist-data"))

        !localStorageData ?
            setTasks(false)
        :
            setTasks(localStorageData.task.reverse()) // order | newest first 
    }

    const renderTable = () => {

        return <>
            <table className="table table-dark align-midle mt-4">
                <thead> 
                    <tr>
                        <th scope="col"> Task title </th>
                        <th scope="col"> Project </th> 
                        <th scope="col"> Comment </th>
                        <th scope="col">
                            <form className="form-inline justify-content-center align-items-center" onSubmit={ e => e.preventDefault() }>
                                <Link to="/newTask" className="btn btn-warning">
                                    New 
                                </Link>
                            </form>
                        </th>
                    </tr>
                </thead>
                    <tbody className="text-dark">
                        <TableContent 
                            info = { tasks }
                            deleteTask = {
                                {
                                    function: deleteThis ,
                                    value: deleted
                                }
                                
                            }
                        />
                    </tbody>
            </table>
        </>
    }


    return <>
        <div className="table-responsive-xl container-lg px-0">
            { renderTable() }
        </div>
    </>
}

export default Table
