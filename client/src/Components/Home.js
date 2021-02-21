
import React, { Component } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../Img/i1.jpg';
import image2 from '../Img/i3.jpg';



class Home extends Component {
  render() {
    return (
        
          <div>
            <img src={image1} className="carou"/>
          </div>
        
    );
  }
}

export default Home;