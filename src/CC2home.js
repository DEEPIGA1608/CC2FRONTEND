import React from 'react';
import { Link } from 'react-router-dom';
import "./CC2home.css";

function CC2home() {
  return (
    <div class="home">
    <img class="img" src="https://media.istockphoto.com/id/1226363218/cs/vektor/%C4%8Dern%C3%A1-%C4%8D%C3%A1ra-cross-nemocni%C4%8Dn%C3%AD-l%C3%A9ka%C5%99sk%C3%A1-ikona-izolovan%C3%A1-na-b%C3%ADl%C3%A9m-pozad%C3%AD-prvn%C3%AD-pomoc.jpg?s=1024x1024&w=is&k=20&c=MhIwt_Q9kVbBFDHpd2CL-6tujGrvpF7zZ7GJMGRKbRo=" alt="bg"/>
    <div className='box1'>
        <a><Link to="/CC2put"><button class="pretty"> NEW PATIENT</button><br/><br/></Link></a>
        <a><Link to="/CC2update"><button class="pretty"> UPDATE DETAILS</button><br/><br/></Link></a>
        <a><Link to="/CC2delete"><button class="pretty"> DELETE RECORD</button><br/><br/></Link></a>
        <a><Link to="/CC2display"><button class="pretty"> DISPLAY PATIENT</button></Link></a>
    </div>
    </div>
  )
}

export default CC2home