import React, { Component } from 'react'
import Invalid from '../Img/invalid.png'
import { Card} from 'react-bootstrap';

export class InvalidStudent extends Component {
    render() {
        return (
            <div>
                

                    <Card>
        <Card.Img variant="top" src={Invalid} style={{width:"50%", marginLeft:"27%"}}/>
        <Card.Body>
        <Card.Text style={{fontSize:"50px", marginLeft:"20%"}}>
                
                Incase of any discrepancies contact Admin
        </Card.Text>
        </Card.Body>
    </Card>
    
            </div>
        )
    }
}

export default InvalidStudent
