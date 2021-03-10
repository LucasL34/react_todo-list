import React, { Component } from 'react';

class Register extends Component {

    render(){
        return(
            <React.Fragment>
                <div className="mb-3">
                    <label htmlFor="username_register" className="form-label"> Username: </label>
                    <input type="text" className="form-control" id="username_register" placeholder="Username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass_register" className="form-label"> Password: </label>
                    <input type="password" className="form-control" id="pass_register" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass_register_repeat" className="form-label"> Repeat password: </label>
                    <input type="password" className="form-control" id="pass_register_repeat" placeholder="Repeat password" />
                </div>
                    <div className="row justify-content-center">
                    <button className="btn btn-success"> Register! </button>
                </div>
            </React.Fragment>
        );
    }
};



export default Register;