import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import FormNav from './form/formNav';
import Login from './form/login';
import Register from './form/register';

class Form extends Component{
    render(){
        return(
            
            <div className="container mt-5">
                {/* En contenedor es el mismo pero varia el contenido del for segun un router link 
                en el panel heading */ }

                <div className="col-8 m-auto px-5">

                    <FormNav />

                    <form className="form mt-5">

                            <Switch>
                                <Route path="/user/register">
                                    <Register />
                                </Route>
                                <Route path="/user/">
                                    <Login />
                                </Route>
                            </Switch>

                    </form>
                </div>
            </div>
        );
    }
}

export default Form;