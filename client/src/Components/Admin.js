import React, { Component } from "react";
import './Admin.css';
export default class SignUp extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="outer">
                    <div className="inner">
                        <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Student Name</label>
                            <input type="text" className="form-control" placeholder="Student Name" />
                        </div>

                        <div className="form-group">
                            <label>MetaMask ID</label>
                            <input type="password" className="form-control" placeholder="Enter Metamask ID" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                    </form>
                </div>
                </div>
            </nav>
            </div>
            
        );
    }
}