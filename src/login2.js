import "./Login2.css";

const Login2 = () => {
  return (
    <div className="main">
      <div className="image-105">
        <span className="shop-details">SHOP DETAILS</span><br></br>
        <span className="shop-address">Shop Address</span><br></br>
        <input className="r1" type="text"/><br></br>
        <span className="shop-address">Street Address</span><br></br>
        <input className="r1" type="text"/><br></br>
        <span className="address-line-2">Address Line2</span><br></br>
        <input className="r1" type="text" /><br></br>
        <div className="flex-container">
          <span className="city">City</span><br></br>
          <span className="state-region">State/Region</span><br></br>
        </div>
        <div className="f1">
          <input className="r2" type="text" /><br></br>
          <input className="r3" type="text" /><br></br>
        </div><br></br>
        <div className="f2">
          <span className="postal-zip-code">Postal/Zip Code</span><br></br>
          <span className="country">Country</span><br></br>
        </div>
        <div className="f3">
          <input className="r5" type="number" /><br></br>
          <input className="r4" type="text" /><br></br>
        </div>
        <div className="f4">
          <span className="working-hours">Working hours</span><br></br>
          <span className="working-days">Working Days</span><br></br>
        </div>
        <div className="f5">
        <input className="r5" type="number"/><br></br>
          <input className="r6" type="number" /><br></br>
        </div>
        <button className="r7">
          <span className="register">REGISTER</span>
        </button>
      </div> 
    </div>
  );
};
export default Login2;


