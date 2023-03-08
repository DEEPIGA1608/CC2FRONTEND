import React, { Component } from 'react'

export class Test727721euit027 extends Component {
    constructor(props){
        super(props)
        this.State={
            Isloggedin:true
        }
    }
  render() {
    if(this.State.Isloggedin){
      return(<h1>Welcome !!</h1>);
    }
    else{
      return(<h1>You are not logged in !!</h1>)
    }
  }
}

export default Test727721euit027;