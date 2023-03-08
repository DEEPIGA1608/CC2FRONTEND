import React, { Component } from 'react'
import "./CC2put.css";
import axios from 'axios';
export class CC2put extends Component {
  constructor(props) {
    super(props);
    this.state = {
        patientid:'',
        patientname:'',
        age :'',
        disease: '',
        attendername:'',
        doctorname:'',
        status:''
    };
  }

  handlepatientidChange = (event) => {
    this.setState({ patientid: event.target.value });
  };

  handlepatientnameChange = (event) => {
    this.setState({ patientname: event.target.value });
  };

  handleageChange = (event) => {
    this.setState({ age: event.target.value });
  };

  handlediseaseChange = (event) => {
    this.setState({ disease: event.target.value });
  };

  handleAttendernameChange = (event) => {
    this.setState({ attendername: event.target.value });
  };
  handledoctornameChange = (event) => {
    this.setState({ doctorname: event.target.value });
  };
  handlestatusChange = (event) => {
    this.setState({status: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        patientid: this.state.patientid,
        patientname: this.state.patientname,
        age: this.state.age,
        disease: this.state.disease,
        attendername: this.state.attendername,
        doctorname:this.state.doctorname,
        status:this.state.status,
      };
    
      axios.post("http://127.0.01:8080/post",data)
  };

  render() {
    return (
      <div class="put"><br/><br/>
      <div id="body">
      <div id="b1">
        <form onSubmit={this.handleSubmit}class="form">
          <p>PatientId:
          <input
            class="p1"
            type="number"
            value={this.state.patientid}
            onChange={this.handlepatientidChange}
          /></p>
          <p>PatientName:
          <input
            class="p2"
            type="text"
            value={this.state.patientname}
            onChange={this.handlepatientnameChange}
          /></p>
          <p>Age:
          <input
            class="p3"
            type="number"
            value={this.state.age}
            onChange={this.handleageChange}
          /></p>
          <p>Disease:
          <input
            class="p4"
            type="text"
            value={this.state.disease}
            onChange={this.handlediseaseChange}
          /></p>
          <p>AttenderName:
          <input
            class="p5"
            type="text"
            value={this.state.attendername}
            onChange={this.handleAttendernameChange}
          /></p>
          <p>DoctorName:
          <input
            class="p6"
            type="text"
            value={this.state.doctorname}
            onChange={this.handledoctornameChange}
          /></p>
          <p>Status:
          <input
            class="p7"
            type="text"
            value={this.state.status}
            onChange={this.handlestatusChange}
            />
            
          <input type="submit" class="g1"/>
        </p>
        </form>
        </div></div></div>
      );
  }
}

export default CC2put;

