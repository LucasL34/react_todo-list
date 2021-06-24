import React, { useEffect } from 'react'

import Footer from '../components/footer'
import Table from '../components/table/table'
import Title from '../components/title'

function Home(){

    useEffect( () => {
        const IsTodolistData = localStorage.getItem("ltodolist-data")

        if(!IsTodolistData){
            const todolistData = {
                task: [],
            }
            
            const data = JSON.stringify(todolistData)
    
            localStorage.setItem("ltodolist-data", data)
        }
    }, [])

    const priorityGuide =
        <div className="container-fluid mb-3 text-dark">
            <ul id="ulExample" className="container d-flex align-items-center justify-content-around flex-wrap">
                <li title="Without priority">
                    <figure className="bg-secondary"></figure>
                    <b className="user-select-none"> None </b>
                </li>
                <li title="Common priority">
                    <figure className="bg-info"></figure>
                    <b className="user-select-none"> Common </b>
                </li>
                <li title="Medium priority">
                    <figure className="bg-warning"></figure>
                    <b className="user-select-none"> Medium </b>
                </li>
                <li title="High priority">
                    <figure className="bg-danger"></figure>
                    <b className="user-select-none"> High </b>
                </li>
            </ul>
        </div>
    

    return <>
        <Title title="Todo list"/>
        { priorityGuide }
        <Table/>
        <Footer />
    </>
}

export default Home