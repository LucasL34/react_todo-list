import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FormNav(){

    const [active, activator] = useState(true); // active = value, activator = update | true = default value

    return(
        <React.Fragment>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="./login" href="#" id="loginForm" className={ (active === true ? "nav-link active" : "nav-link ") } onClick={ ()=>{ activator(!active)} } > 
                        Login 
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to="./register" href="#" id="registerForm" className={ (active === true ? "nav-link" : "nav-link active") } onClick={ ()=>{ activator(!active)} }> 
                        Register 
                    </Link>
                </li>
                
            </ul>
        </React.Fragment>
    )

}

export default FormNav;