import React, { Component } from 'react'
import "./CC2firstpg.css"
import { Link } from 'react-router-dom';
export class CC2firstpg extends Component {
  render() {
    return (
      <div class="firstpg">
          <h1 class="h1">QuikHealth Hospital</h1>
          <a><Link to="/CC2home"><input type="submit" value="GO" class="input"/></Link></a>
      </div>
    )
  }
}

export default CC2firstpg;

 