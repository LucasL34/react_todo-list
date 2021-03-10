import React, { Component } from 'react';

class Login extends Component {

    render(){
        return(
            <React.Fragment>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label"> Username: </label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label"> Password: </label>
                    <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Password" />
                </div>
                    <div className="row justify-content-center">
                    <button className="btn btn-warning"> Enjoy! :3 </button>
                </div>
            </React.Fragment>
        );
    }
};

export default Login;