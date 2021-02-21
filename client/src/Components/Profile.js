import React, { Component } from 'react';
import { Card, InputGroup } from 'react-bootstrap';
import Dora from './photo.jpg';
import Landscape from './landscape.jpg';
import "./ProfileBox.css";
import ReactRoundedImage from "react-rounded-image";

class Profile extends Component {
  render() {
    return (

    <div>
      <div className="ProfileBox">      
      <Card className="Land">
        <div style={{marginLeft:"45%",marginRight:"45%"}}>
        <ReactRoundedImage 
          image={Dora}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
        />
        </div>
        

        
        
        <Card.Body>
          <Card.Text>
            <h2 style={{ fontFamily: "monospace",color:"white"}}> User Address </h2>
          <h2 style={{ fontFamily: "monospace", color:"white",fontWeight: "Bold", fontSize: "220%" ,marginLeft:"25%" ,marginRight: "25%",  marginTop:"2%", marginBottom:"5%"}}>{this.props.author}</h2>
       
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
        <div class="InputSection">
          <div >
          <InputGroup.Prepend style={{marginLeft:"28%",marginRight:"30%"}}>
                <InputGroup.Text style={{fontSize:"210%", fontWeight:"bold"}}>&nbsp; &nbsp;&nbsp; &nbsp;My Questions&nbsp; &nbsp;&nbsp; &nbsp;</InputGroup.Text>
              </InputGroup.Prepend>
            <br></br>
            {this.props.questions.map(
              (que, key) => {
                if (que.author == this.props.author) {
                  return (
                    <div className="card mb-4" key={key} style={{backgroundColor:"black"}}>
                      <ul id="queList" className="list-group list-group-flush" >
                        <li className="list-group-item" >
                          <p class="text-dark" style={{ marginLeft: "20%", marginRight: "20%" , fontStyle:"oblique",fontWeight:"bold",fontSize:"120%"}}>{que.id} : {que.question}</p>
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
                                      <div className="card mb-0" knt={knt}  >
                                        <ul id="ansList" className="list-group list-group-flush">
                                          <li className="list-group-item"  style={{backgroundColor:"rgb(243, 242, 241)"}}>
                                            
                                            <p class="text-dark" >{ans.author} : {ans.answer}</p>
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
              }
            )
            }
          </div>
        </div>
  
    </div>
    );
  }
}

export default Profile;