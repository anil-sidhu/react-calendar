import React from 'react';
import '../App';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Confirm extends React.Component {

    test() {
        this.props.profile();
        console.warn("after calling action", this.props.status)
    }
    componentWillMount() {

        console.warn("initail state", this.props.status)
    }

    render() {
        return (
            <div className="App">
          
                <h1>Book Slot</h1>
                <button onClick={() => this.test()} >Confirm</button>
            </div>
        );
    }
}

export default Confirm;
