import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calender from './Calender'
import ConfirmContainer from './containers/ConfirmContainer'
import AppointmentsContainer from './containers/AppointmentsContainer'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
     <Route exact path="/" component={Calender} />
     <Route exact path="/confirm" component={ConfirmContainer} />
     <Route exact path="/appointments" component={AppointmentsContainer} />
   
   </Router>
    </div>
  );
}

export default App;
