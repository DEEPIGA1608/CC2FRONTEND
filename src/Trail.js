import React, { Component } from 'react';
import axios from 'axios';
import "./CC2put.css";
class Trial extends Component {
  constructor(props) {
    super(props);
    this.state = {
        PatientId:'',
        PatientName:'',
        Age: '',
        Disease: '',
        AttenderName:'',
        DoctorName:'',
        Status:''
    };
  }

  handlePatientIdChange = (event) => {
    this.setState({ PatientId: event.target.value });
  };

  handlePatientNameChange = (event) => {
    this.setState({ PatientName: event.target.value });
  };

  handleAgeChange = (event) => {
    this.setState({ Age: event.target.value });
  };

  handleDiseaseChange = (event) => {
    this.setState({ Disease: event.target.value });
  };

  handleAttenderNameChange = (event) => {
    this.setState({ AttenderName: event.target.value });
  };
  handleDoctorNameChange = (event) => {
    this.setState({ DoctorName: event.target.value });
  };
  handleStatusChange = (event) => {
    this.setState({Status: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        PatientId: this.state.PatientId,
        PatientName: this.state.PatientName,
        Age: this.state.Age,
        Disease: this.state.Disease,
        AttenderName: this.state.AttenderName,
        DoctorName:this.state.DoctorName,
        Status:this.state.Status
      };
    
      axios.post('http://127.0.0.1:8080/post', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} class="put">
        <p>PatientId:</p>
        <input
          class="p1"
          type="text"
          value={this.state.PatientId}
          onChange={this.handlePatientIdChange}
        />
        <p>PatientName:</p>
        <input
          class="p2"
          type="text"
          value={this.state.PatientName}
          onChange={this.handlePatientNameChange}
        />
        <p>Age:</p>
        <input
          class="p3"
          type="Age"
          value={this.state.Age}
          onChange={this.handleAgeChange}
        />
        <p>Disease:</p>
        <input
          class="p4"
          type="text"
          value={this.state.Disease}
          onChange={this.handleDiseaseChange}
        />
        <p>AttenderName:</p>
        <input
          class="p5"
          type="text"
          value={this.state.AttenderName}
          onChange={this.handleAttenderNameChange}
        />
        <p>DoctorName:</p>
        <input
          class="p6"
          type="text"
          value={this.state.DoctorName}
          onChange={this.handleDoctorNameChange}
        />
        <p>Status:</p>
        <input
          class="p7"
          type="text"
          value={this.state.Status}
          onChange={this.handleStatusChange}
        />
        <button class="g1">SUBMIT</button>
      </form>
    );
  }
}

export default Trial;