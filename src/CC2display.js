import axios from "axios";
import React, { Component } from "react";
import "./CC2display.css";
class CC2display extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
       <div class="dis"> <br/><br/>
      <div class="fupg"><table border={1}>
      <thead>
        <tr>
          <th>Patientid</th>
          <th>Patientname</th>
          <th>Age</th>
          <th>Disease</th>
          <th>Attendername</th>
          <th>Doctorname</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.patientid}>
            <td>{user.patientid}</td>
            <td>{user.patientname}</td>
            <td>{user.age}</td>
            <td>{user.disease}</td>
            <td>{user.attendername}</td>
            <td>{user.doctorname}</td>
            <td>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
    </div>
    );
  }}
  
export default CC2display;