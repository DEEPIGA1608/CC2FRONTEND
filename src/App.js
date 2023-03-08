import React, { Component } from 'react';
import CC2home from "./CC2home";
import CC2update from "./CC2update"
import CC2put from './CC2put';
import CC2delete from "./CC2delete";
import CC2display from "./CC2display";
import CC2firstpg from './CC2firstpg'; 
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <Router>
      <div>
       <Routes>
        <Route path="/" element={<CC2firstpg/>}></Route>
        <Route path="/CC2home" element={<CC2home/>}></Route>
        <Route path="/CC2put" element={<CC2put/>}></Route>
        <Route path="/CC2update" element={<CC2update/>}></Route>
        <Route path="/CC2delete" element={<CC2delete/>}></Route>
        <Route path="/CC2display" element={<CC2display/>}></Route>
       </Routes>
      </div>
      </Router>
    )
  }
}
export default App;

