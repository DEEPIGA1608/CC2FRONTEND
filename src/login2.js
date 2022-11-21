import "./login2.css";

const Login2 = () => {
  return (
    <div className="main">
      <div className="image-105">
        <span className="shop-details">SHOP DETAILS</span>
        <span className="shop-address">Shop Address</span>
        <input className="r1" type="text"/>
        <span className="shop-address">Street Address</span>
        <input className="r1" type="text"/>
        <span className="address-line-2">Address Line2</span>
        <input className="r1" type="text" />
        <div className="flex-container">
          <span className="city">City</span>
          <span className="state-region">State/Region</span>
        </div>
        <div className="f1">
          <input className="r2" type="text" />
          <input className="r3" type="text" />
        </div>
        <div className="f2">
          <span className="postal-zip-code">Postal/Zip Code</span>
          <span className="country">Country</span>
        </div>
        <div className="f3">
          <input className="r5" type="number" />
          <input className="r4" type="text" />
        </div>
        <div className="f4">
          <span className="working-hours">Working hours</span>
          <span className="working-days">Working Days</span>
        </div>
        <div className="f5">
        <input className="r5" type="number"/>
          <input className="r6" type="number" />
        </div>
        <button className="r7">
          <span className="register">REGISTER</span>
        </button>
      </div>
    </div>
  );
};
export default Login2;


