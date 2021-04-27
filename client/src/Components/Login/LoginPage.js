
import React, { Component } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link}from "react-router-dom";
import './Home.css';
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="outer">
                        <div className="inner">
                            <Form onSubmit={(e) => {
                                e.preventDefault()
                                this.props.verifyStudent(this.inputStuId.value, this.inputUserName.value, this.inputAccountAddress.value)
                                
                            }}>
                                <Form >
                                
                                <input
                                    
                                    ref={(input_1) => {
                                        this.inputStuId = input_1
                                    }}
                                    type="text"
                                    style={{ width: "10%", marginLeft: "45%", marginRight: "45%" }}
                                    className="form-control"
                                    placeholder="Students ID"
                                    required />
                                    
                                    <input
                                    
                                    ref={(input_2) => {
                                        this.inputUserName = input_2
                                    }}
                                    type="text"
                                    style={{ width: "10%", marginLeft: "45%", marginRight: "45%" }}
                                    className="form-control"
                                    placeholder="User Name"
                                    required />
                            
                                    <br></br>
                                    <textarea
                                    ref={(input_3) => {
                                        this.inputAccountAddress = input_3
                                    }}
                                    type="text-area"
                                    className="form-control"
                                    placeholder="0X000000000000000000000000000000000"
                                    style={{ height: "5em", marginLeft: "4%", marginRight: "5%", width: "91%", }}
                                    required />

                                    <input type="submit" hidden={true} />
                                <input type="submit" hidden={true} />

                                </Form>
                                <br></br>

                                <Button variant="primary" type="submit">
                                Login
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

export default Home;