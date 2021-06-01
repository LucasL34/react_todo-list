import React from 'react'

import Nav from '../components/nav'
import Input from '../components/input'
import Button from '../components/button'
import Footer from "../components/footer"

import json_project from '../exampleNames' 


function newTask(){

    const textarea = () => {

        return <>
             <div className="my-3">
                <label className="form-label" htmlFor="textareaComment">
                    Comment:
                </label>
                <textarea className="form-control" id="textareaComment" placeholder="Short comment (optional)" />
            </div>
        </>
    }

    const select = () => {

        return <>
            <div className="input-group my-3">
                <label className="input-group-text" htmlFor="selectPriority">
                    Priority:
                </label>
                <select className="form-select form-control" id="selectPriority">
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

        const title = document.querySelector("#newTaskTitle").value, 
            name = document.querySelector("#newTaskName").value, 
            comment = document.querySelector("#textareaComment").value, 
            priority = document.querySelector("#selectPriority").value 

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
            <form onSubmit={ sendTask } className="container-lg m-auto">
                <Input 
                    data = {{
                        type: "text",
                        label: "Task title",
                        id: "newTaskTitle",
                    }}
                />
                <Input 
                    data = {{
                        type: "text",
                        label: "Project name",
                        id: "newTaskName",
                        examplePlaceholder: json_project.project 
                    }}
                />
                { textarea() }
                { select() }

                <Button 
                    data = {{
                        cssClass: "btn btn-dark",
                        text: "Save task :D",
                        id: "newTaskBtn"
                    }}
                />
            </form>
        </>
    }

    return <>
        <Nav />
        <div className="container-fluid my-5">
            <h1 className="text-center"> New task </h1>
                { newTaskForm() } 
        </div>
        <Footer />
    </>

}

export default newTask
