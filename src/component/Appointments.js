import React from 'react';
import moment from 'moment'
import { Container, Col, Row, Dropdown, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const date = new Date();
class Appointments extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    // shouldComponentUpdate(nextProps, nextState)
    // {
    // console.warn("newDATA",this.props)
    // if(this.props.bookingData!=nextProps.bookingData)
    // {
    //     let oldData=localStorage.getItem("ApStorage");
    //     let ApStorage=[oldData]
    //     ApStorage.push(this.props.bookingData);
    //     localStorage.setItem('ApStorage',ApStorage)
    //     console.warn("newDATA",this.props)
    //     return false;
    // }
    // else
    // {
    //     return true;
    // }
    //     return true;
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {

        let oldData = JSON.parse(localStorage.getItem("ApStorage"));
        let ApStorage = oldData ? oldData:[]
        ApStorage.push(this.props.bookingData);
        localStorage.setItem('ApStorage', JSON.stringify(ApStorage))
        console.warn("newDATA",oldData)

        return true
    }

    render() {
        return (
            <div className="App">
                <Container className="time-slow-size">
                    Appointments
                </Container>
            </div>
        );
    }
}

export default Appointments;
