import React, { useEffect } from 'react'

import Footer from '../components/footer'
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
        <h1 className="text-center my-4">
            Todo list
        </h1>
            <div className="container-fluid mb-3 text-dark">
                <ul id="ulExample" className="container d-flex align-items-center justify-content-around flex-wrap">
                    <li>
                        <figure className="bg-secondary"></figure>
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
        <Footer />
    </>
}


export default Home
