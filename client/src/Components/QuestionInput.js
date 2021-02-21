import React, { Component } from 'react'
import { Form, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import "../index.css";
class QuestionInput extends Component {

  render() {
    return (
      
      <div class="InputSection">
        <Form onSubmit={(e) => {
          e.preventDefault()
          this.props.postQuestion(this.inputVariable.value)
        }}>
          <Form.Row>
            <Col xs={60}>
              <InputGroup.Prepend>
                <InputGroup.Text>Post Question</InputGroup.Text>
              </InputGroup.Prepend>
            </Col>
            <Col>

              <input
                ref={(input) => {
                  this.inputVariable = input
                }}
                type="textarea"
                className="form-control"
                placeholder=" Enter Question"
                required />
            </Col>

            <input type="submit" hidden={true} />
          </Form.Row>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br></br>
          <br></br>
        </Form>



        <div className="sppace">
          <Form onSubmit={(e) => {
            e.preventDefault()
            this.props.addAnswer(this.inputQueID.value, this.inputAnsVariable.value)
            
          }}>
            <Form >
              
                <input
                  ref={(inputID) => {
                    this.inputQueID = inputID
                  }}
                  type="text"
                  style={{ width: "10%", marginLeft: "45%", marginRight: "45%" }}
                  className="form-control"
                  placeholder=" QueID"
                  required />
           
                  <br></br>
                <textarea
                  ref={(inputAns) => {
                    this.inputAnsVariable = inputAns
                  }}
                  type="text-area"
                  className="form-control"
                  placeholder=" Enter Answer"
                  style={{ height: "5em", marginLeft: "4%", marginRight: "5%", width: "91%", }}
                  required />

                <input type="submit" hidden={true} />
         


              <input type="submit" hidden={true} />

            </Form>
            <br></br>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br></br>  
            <br></br>  
          </Form>

        </div>

        <div >
          {this.props.questions.map(
            (que, key) => {
              return (
                <div className="card mb-4" key={key}  >
                  <div class="Author">
                    Author : {que.author}
                  </div>
                  <ul id="queList" className="list-group list-group-flush" >
                    <li className="list-group-item">
                      <h5 style={{ fontFamily: "monospace"}}>Que ID: {que.id} </h5>
                      <p class="text-dark"  style={{fontWeight:"bold",fontSize:"120%"}}>{que.question}</p>
                    </li>
                  </ul>

                  <div>
                    {this.props.answers.map(
                      (ans, knt) => {
                        return (

                          <div>

                            {(() => {
                              if (ans.queId == que.id) {
                                return (
                                  <div className="card mb-0" knt={knt} style={{backgroundColor:"black"}} >
                                    <ul id="ansList" className="list-group list-group-flush">
                                      <li className="list-group-item" style={{backgroundColor:"rgb(243, 242, 241)"}}>
                                        <p class="text-dark" >Author Address: {ans.author}</p>
                                        <h5>{ans.answer}</h5>
                                        <small className="float-left mt-1 text-muted">
                                          TIPS: {window.web3.utils.fromWei(ans.tipAmount.toString(), 'Ether')} ETH
                                        </small>
                                        <button
                                          className="btn btn-link btn-sm float-right pt-0"
                                          name={knt}
                                          onClick={(event) => {
                                            let tipAmount = window.web3.utils.toWei('1', 'Ether')
                                            console.log(event.target.name, tipAmount)
                                            this.props.tipAnswer(event.target.name, tipAmount)
                                          }}
                                        >
                                          TIP 1 ETH
                                        </button>
                                      </li>
                                    </ul>                                    
                                  </div>
                                )
                              }

                              return null;
                            })()}
                          </div>
                        )
                      }
                    )
                    }
                  </div>

                </div>
              )
            }
          )
          }
        </div>


      </div>
    );
  }
}

export default QuestionInput;