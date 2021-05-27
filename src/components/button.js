import React from 'react'

function Button(props){

    const { cssClass, text, id = false } = props.data 

    return <>
        <div className="row justify-content-center" > 
            <button className={ cssClass } id={ !id ? null : id } > 
                { text } 
            </button>
        </div>
    </>
}

export default Button
