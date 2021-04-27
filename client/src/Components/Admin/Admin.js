import React, { Component } from "react";
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import './Admin.css';
export default class SignUp extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="outer">
                        <div className="inner">
                            <Form onSubmit={(e) => {
                                e.preventDefault()
                                this.props.addStudent(this.inputUserName.value, this.inputAccountAddress.value)
                                
                            }}>
                                <Form >
                                
                                    <input
                                    ref={(input_1) => {
                                        this.inputUserName = input_1
                                    }}
                                    type="text"
                                    style={{ width: "50%", marginLeft: "25%", marginRight: "45%" }}
                                    className="form-control"
                                    placeholder="User Name"
                                    required />
                            
                                    <br></br>
                                    <textarea
                                    ref={(input_2) => {
                                        this.inputAccountAddress = input_2
                                    }}
                                    type="text"
                                    className="form-control"
                                    placeholder="0X000000000000000000000000000000000"
                                    style={{ height: "3em", marginLeft: "4%", marginRight: "5%", width: "97%", }}
                                    required />

                                    <input type="submit" hidden={true} />
                                <input type="submit" hidden={true} />

                                </Form>
                                <br></br>

                                <Button variant="primary" type="submit" style={{marginLeft: "30%"}}>
                                Register Student
                                </Button>
                                <br></br>  
                                <br></br>  
                            </Form>
                        </div>
                    </div>
            </nav>
            </div>

        );
    }
}