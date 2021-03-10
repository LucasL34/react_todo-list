import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark mb-2">
                <Link to="/user/" className="navbar-brand" id="login">
                    Log in 
                </Link>

            </nav>
        );
    }
}

export default Nav;