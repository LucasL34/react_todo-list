import React, { useEffect } from 'react'

import Nav from '../components/nav'
import Table from '../components/table'

function Home(){

    useEffect( () => {
        const verifingData = localStorage.getItem("ltodolist-data")

        if(!verifingData){
            const todolistData = {
                task: [],
            }
            
            const string = JSON.stringify(todolistData)
    
            localStorage.setItem("ltodolist-data", string)
        }
    }, [])

    return <>
        <Nav />
            <h1 className="text-center my-4">
                Todo list
            </h1>
            <div className="container-fluid bg-dark my-3 text-white">
                <ul id="ulExample" className="container d-flex align-items-center justify-content-around flex-wrap mt-3">
                    <li>
                        <figure className="bg-light"></figure>
                        None 
                    </li>
                    <li>
                        <figure className="bg-info"></figure>
                        Common
                    </li>
                    <li>
                        <figure className="bg-warning"></figure>
                        Medium
                    </li>
                    <li>
                        <figure className="bg-danger"></figure>
                        High
                    </li>
                </ul>
            </div>
        <Table/>
    </>
}


export default Home
