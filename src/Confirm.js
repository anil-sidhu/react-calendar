import React from 'react';
import './App.css';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Calender extends React.Component {
    constructor() {
        super()
        this.state = {
            timeSlots: [],
            selectSlot: undefined
        }
    }

    render() {
        return (
            <div className="App">
            <h1>Book Slot</h1>
            </div>
        );
    }
}

export default Calender;
