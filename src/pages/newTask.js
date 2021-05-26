import React from 'react'

import Nav from '../components/nav'
import Input from '../components/input'
import Button from '../components/button'

import json_project from '../exampleNames' 


function newTask(){

    const textarea = () => {

        return <>
             <div className="my-3">
                <label className="form-label" htmlFor="textarea_comment">
                    Comment:
                </label>
                <textarea className="form-control" id="textarea_comment" placeholder="Short comment (optional)" />
            </div>
        </>
    }

    const select = () => {

        return <>
            <div className="input-group my-3">
                <label className="input-group-text" htmlFor="select_priority">
                    Priority:
                </label>
                <select className="form-select form-control" id="select_priority">
                    { setOptionLabel() }
                </select>
            </div>
        </>
    }

    const setOptionLabel = function(){

        const categories = [
            { class: "secondary", text: "None" },
            { class: "info", text: "Common" },
            { class: "warning", text: "Medium" },
            { class: "danger", text: "High" },
        ]

        return categories.map( option => {
            return( 
                <option value={option.class} key={option.class}> 
                    { option.text }
                </option>
            )
        })
    }

    const sendTask = e => {

        e.preventDefault()

        const title = document.querySelector("#new_task_title").value, 
            name = document.querySelector("#new_task_name").value, 
            comment = document.querySelector("#textarea_comment").value, 
            priority = document.querySelector("#select_priority").value 

        const id = Date.now()

        saveData( { id, title, name, comment, priority } )
    }

    const saveData = function(taskData){


        const localStorageData = localStorage.getItem("ltodolist-data"),
            data = JSON.parse(localStorageData)

        data.task.push(taskData)

        localStorage.setItem("ltodolist-data", JSON.stringify(data))

        window.location.href = "/"
    }

    const newTaskForm = () => {

        return <>
            <form onSubmit={ sendTask } >
                <Input 
                    data = {{
                        type: "text",
                        label: "Task title",
                        id: "new_task_title",
                    }}
                />
                <Input 
                    data = {{
                        type: "text",
                        label: "Project name",
                        id: "new_task_name",
                        examplePlaceholder: json_project.project 
                    }}
                />
                { textarea() }
                { select() }

                <Button 
                    data = {{
                        cssClass: "btn btn-dark",
                        text: "Save task :D",
                        id: "new_task_btn"
                    }}
                />
            </form>
        </>
    }

    return <>
        <Nav />
        <div className="container mt-5">
            <h1 className="text-center"> New task </h1>
            <div className="col-6 m-auto px-5">
                { newTaskForm() } 
            </div>
        </div>
    </>

}

export default newTask
