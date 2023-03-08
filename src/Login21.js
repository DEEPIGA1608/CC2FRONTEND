import "./Login21.css";
import {Link} from "react-router-dom";
const Login21 = () => {
  return (
    <div className="c1">
      <div className="c2">
        <span className="c3">CONTACT DETAILS</span><br></br>
        <span className="c4">Client Name</span><br></br>
        <input type="text"/><br></br>
        <span className="c5">Company</span><br></br>
       <input className="c6" type="text" /><br></br>
        <span className="c7">Category</span><br></br>
        <input type="text"/><br></br>
        <span className="c8">Phone Number</span><br></br>
        <input className="c9" placeholder="91+" type="tel" /><br></br>
        <span className="c10">Email</span><br></br>
        <input className="c11" type="email" /><br></br>
        <div className="c12">
          <button className="c13">
            <div className="c14">
              <span className="c15"><a><Link to="/Login12">BACK</Link></a></span><br></br>
            </div>
          </button>
          <button className="c16"><a><Link to="/Login2">NEXT</Link></a></button>
        </div>
      </div>
    </div>
  );
};
export default Login21;