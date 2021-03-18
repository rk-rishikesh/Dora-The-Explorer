
import React, { Component } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link}from "react-router-dom";
import './Home.css';


class Home extends Component {
  render() {
    return (
        
      <form className="back">
        <div className="not-found">
      <div className="space">
      <h1 className="sign">LogIn</h1>

      <div className="form-group sizepage ">
          <label className="nameinp">Name</label>
          <input type="text" className="form-control inp" placeholder="Enter Name" />
      </div>

      <div className="form-group sizepagepass">
          <label className="nameinp">Unique Id</label>
          <input type="text" className="form-control inp" placeholder="Enter Unique Id" />
      </div>

      
      <Link className="btn button1" to="/questionInput">Submit </Link>
      </div>
      </div>
  </form>
    );
  }
}

export default Home;