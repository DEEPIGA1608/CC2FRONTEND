import "./Login12.css";
import React from "react";
import {Link} from "react-router-dom";
const Login12 = () => {
  return (
    <div className="b1">
      <div className="b2">
        <span className="b3">CREATE YOUR ACCOUNT</span><br></br><br></br>
        <span className="b4">Email/Phone</span><br></br>
        <input type="text" className="b13"/><br></br>
        <span className="b5">Username</span><br></br>
        <input type="text"className="b13"/><br></br>
        <span className="b6">Password</span><br></br>
        <input type="password" className="b13"/><br></br>
        <span className="b7">Confirm Password</span><br></br>
        <input type="password" className="b13"/><br></br>
        <div className="b8">
          <input className="b12" type="checkbox"/>
          <span className="b9">TERMS & CONDITIONS</span>
        </div><br></br>
        <button className="b10">
          <span className="b11"><Link to="/Login21">NEXT</Link></span>
        </button>
      </div>
    </div>
  );
};
export default Login12;