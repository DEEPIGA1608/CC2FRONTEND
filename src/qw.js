// mui
// 1.npm install @mui/material @emotion/react @emotion/styled
// 2.npm install @mui/icons-material

// router
// npm install react-router-dom

// dropdown
// npm install react-select


1
// import React from 'react'
//  class Ccomponent extends React.Component {
//  state = { }
//  render() {
//  return (
//  <div>
//  <h1>Class Component:</h1>
//  <h2>Hello Everyone,Welcome To React</h2>
//  </div>
//  );
//  }
// }
// export default Ccomponent;

2

// import React from 'react'
//  function Demo() {
//  return(
//  <div>
//  <h1>Hello everyone, Welcome to react.</h1>
//  </div>
//  )
//  }
//  export default Demo;

3

// App.js
// import React, { Component } from 'react'
// import "./App.css"
// import Class from './Class.js'
// class App extends Component {
// render() {
// return ( <div><Class /></div> )
// }
// }
// export default App Class.js
// import React, { Component } from 'react'
// export class Class extends Component {
// constructor(props){
// super(props)
// this.state={
// isLoggedIn:true
// } }
// render() {
// if(this.state.isLoggedIn){
// return ( <h1>Welcome !</h1> )}
// else{
// return ( <h1>You are not logged in!!</h1> )
// } }}
// export default Class

4

// import React from 'react';

// class Parent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             data: 'Data from parent'
//         }
//     }

//     render(){
//         const {data} = this.state;
//         return(
//             <div>
//                 <Child dataParentToChild = {data}/>
//             </div>
//         )
//     }
// }

// class Child extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             data: this.props.dataParentToChild
//         }
//     }

//     render(){
//         const {data} = this.state;
//         return(
//             <div>
//                 {data}
//             </div>
//         )
//     }
// }

// export default Parent;


5

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


// export default function MediaCard() {
//     return (
//     <Card sx={{ maxWidth: 345 }}>
//     <CardMedia
//     component="img"
//     height="140"
    
    
//     alt="green iguana"
//     />
//     <CardContent>
//     <Typography gutterBottom variant="h5" component="div">
//     SKCET
//     </Typography>
//     <Typography variant="body2" color="text.secondary9 ">
//     SKCET is one of the finest colleges in South India.It is well known for it's infrastructure, academics and
//     the placements offered. With Asia's second-largest library, SKCET is well -known for it's architecture and
//     maintenance.
//     </Typography>
//     </CardContent>
//     <CardActions>
//     <Button size="small">Share</Button>
//     <Button size="small">Learn More</Button>
//     </CardActions>
//     </Card>
    
    
    
//     );
//     }



6

// import React from 'react';
// import { Link } from "react-router-dom";
// const Navbar= () =>{
// return (
// <div>
// <li>
// <Link to="/">Dogs</Link>
// </li>
// <li>
// <Link to="/Cats">Cats</Link>
// </li>
// <li>
// <Link to="/Sheeps">Sheeps</Link>
// </li>
// <li>
// <Link to="/Goats">Goats</Link>
// </li>
// </div>
// );
// }
// export default Navbar;
// Dogs.js
// import React from 'react';
// const Dogs = () =>{
// return (
// <div>
// <h3>Dogs</h3>
// <div>
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfWAsdefiHEei-05ERuLDpHUCaeXrCvGBnMOX0SkR&s"/>
// </div>
// </div>
// );
// }
// export default Dogs;
// Cats.js
// import React from 'react';
// const Cats = () =>{
// return (
// <div>
// <h3>Cats</h3>
// <div>
// <img src="https://images.pexels.com/photos/45201/kitty-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"/>
// </div>
// </div>
// );
// }
// export default Cats;
// Sheeps.js
// import React from 'react';
// const Sheeps = () =>{
// return (
// <div>
// <h3>Sheeps</h3>
// <div>
// <img src="https://media.istockphoto.com/id/665494268/photo/lamb-grazing-on-green-grassmeadow.jpg?s=612x612&w=0&k=20&c=3Qqzbor1tkskZvGF7sc7s40Ug_VSzzYkOD0rM6YhMWw="/>
// </div>
// </div>
// );
// }
// export default Sheeps;
// Goats.js
// import React from 'react';
// const Goats = () =>{
// return (
// <div>
// <h3>Goat</h3>
// <div>
// <img src="https://media.istockphoto.com/id/486869012/photo/goat-looks-at-us.jpg?s=612x612&w=0&k=20&c=yeu3XUkLR2-mO2zwDGNaVL5o0DITA-deNXSKNaCX6bA="/>
// </div>
// </div>
// );
// }
// export default Goats;

// 7
// import React from "react";
// import { useEffect, useState } from "react";
//  export default function FetchAPI(){
//  const [user, setUser] = useState([]);
//  useEffect(() => {
//  fetch('https:jsonplaceholder.typicode.com/users')
//  .then(res => res.json())
//  .then(res => setUser(res))
//  })


//  console.log(user)
//  return(
//  <div className="main">
//  {user.map(u => (
//  <div>{u.name}, {u.id}, {u.email}</div>
//  ))}
//  </div>
//  )
//  }

// 8

// import * as React from 'react';
// const Appp = () => {
// return (
// <div>
// <select>
// <option value="fruit">Fruit</option>
// <option value="vegetable">Vegetable</option>
// <option value="meat">Meat</option>
// <option value="Groceries">Groceries</option>
// <option value="Snacks">Snacks</option>
// <option value="Footwears">Footwears</option>
// </select>
// </div>
// );
// };
// export default Appp;


//8.css

// .dropdown-container {
//     text-align: left;
//     border: 2px solid rgb(57, 19, 196);
//     position: relative;
//     border-radius: 5px;
//     }
//     .dropdown-input {
//     padding: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     user-select: none;
    
    



//10

// import React from 'react'; 
// // import './form.css';
// class RegisterForm extends React.Component { constructor() {
// super(); this.state = {
// fields: {},
// errors: {}
// }
// this.handleChange = this.handleChange.bind(this); this.submituserRegistrationForm =
// this.submituserRegistrationForm.bind(this);
// };
// handleChange(e) {
// let fields = this.state.fields; fields[e.target.name] = e.target.value; this.setState({
// fields
// });
// }
// submituserRegistrationForm(e) { e.preventDefault();
// if (this.validateForm()) { let fields = {}; fields["username"] = "";
// fields["mobileno"] = "";
// fields["password"] = ""; this.setState({fields:fields}); alert("Form submitted");
// }
// }
// validateForm() {
// let fields = this.state.fields; let errors = {};
// let formIsValid = true; if (!fields["username"]) {
// formIsValid = false;
// errors["username"] = "*Please enter your username.";
// }
// if (typeof fields["username"] !== "undefined") {
// if (!fields["username"].match(/^[a-zA-Z ]*$/)) { formIsValid = false;
// errors["username"] = "*Please enter alphabet characters only.";
// }
// }
// if (!fields["emailid"]) { formIsValid = false;
// errors["emailid"] = "*Please enter your email-ID.";
// }
// if (!fields["mobileno"]) { formIsValid = false;
// errors["mobileno"] = "*Please enter your mobile no.";
// }
// if (typeof fields["mobileno"] !== "undefined") { if (!fields["mobileno"].match(/^[0-9]{10}$/)) {



// formIsValid = false;
// errors["mobileno"] = "*Please enter valid mobile no.";
// }
// }
// if (!fields["password"]) { formIsValid = false;
// errors["password"] = "*Please enter your password.";
// }
// if (typeof fields["password"] !== "undefined") {
// if (!fields["password"].match("^(?=.[a-z])(?=.[A-Z])(?=.[0- 9])(?=.[!@#$%^&*])(?=.{8,})")) {
// formIsValid = false;
// errors["password"] = "*Please enter secure and strong password.";
// }
// }
// this.setState({ errors: errors
// });
// return formIsValid;
// }
// render() { return (
// <div id="main-registration-container">
// <div id="register">
// <h3>Registration page</h3>
// <form method="post" name="userRegistrationForm" onSubmit=
// {this.submituserRegistrationForm} >
// <label>Name</label>
// <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
// <div className="errorMsg">{this.state.errors.username}</div>
// <label>Mobile No:</label>
// <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}
// />
// <div className="errorMsg">{this.state.errors.mobileno}</div>
// <label>Password</label>
// <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange}
// />
// <div className="errorMsg">{this.state.errors.password}</div>
// <input type="submit" className="button" value="Register"/>
// </form>
// </div>
// </div>
// );
// }



// }
// export default RegisterForm;

//10 css

// #register, #login {
//     width: 300px;
//     border: 1px solid #d6d7da; padding: 0px 15px 15px 15px; border-radius: 5px;
//     font-family: arial; line-height: 16px; color: #333333; font-size: 14px;
//     background: #ffffff; margin: 100px auto;
//     }
//     form label, form input { display: block;
//     margin-bottom: 10px; width: 90%
//     }
//     form input { padding: 10px;
//     border: solid 1px #BDC7D8;
//     }
//     .button {
//     background-color: #00BFFF; border-color: #3ac162; font-weight: bold; padding: 12px 15px; color: #ffffff;
//     }
//     .errorMsg { color: #cc0000;
//     margin-bottom: 12px;
//     }
//     .sucessMsg { color: #6B8E23;
//     margin-bottom: 10px;
    
    


9 

// main page/

// import { Link } from "react-router-dom";
// const Mainpage = () => {
//  return (<>
//  <div>
//  <h1>This is Mainpage</h1>
//  <Link to='/Mainpagetw' className="v2_21">Next Page</Link>

//  </div>
//  </>
//  );
//  };
// export default Mainpage;

// Return page?

// import { Link } from "react-router-dom";
// import { appBarClasses } from "@mui/material"
// const Returnpage = () => {
//  return (<>
//  <div>
//  <h1>This is Next Page</h1>
//  <Link to='/t' class="v2_21">Back to mainpage</Link>

//  </div>
//  </>
//  );
//  };
// export default Returnpage;

// app.js

// import logo from './logo.svg';
// import './App.css';
// import Mainpage from './componentss/Mainpage';
// import Returnpage from './componentss/Mainpagetwo';
// import { Route,Routes } from 'react-router-dom';
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/t' element={<Mainpage/>} />
//         <Route path='/Mainpagetw' element={<Returnpage/>} />
//       </Routes>
//     </div>
//   );
// }
// export default App;


// index ,js

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <App />

//   </BrowserRouter>
// );
// reportWebVitals();



// app.test.js//

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// it('renders without crashing', () => {
// const div = document.createElement('div');
// ReactDOM.render(<App />, div);
// });