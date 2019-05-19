import React from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment'
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const date = new Date();

class Calender extends React.Component {
    constructor() {
        super()
        this.state = {
            timeSlots: [],
            selectSlot: undefined
        }
    }

    componentDidMount() {
        var timeStops = this.getTimeStops('00:00', '23:30');
        this.setState({ timeSlots: timeStops })
    }
    selectTime(slot) {
        console.warn("slot", slot)
        this.setState({ selectSlot: slot })
    }

    timeSlots() {
        const days = [];
        for (let i = 0; i <= this.state.timeSlots.length; i++) {
            days.push(
                <Col key={i}
                    onClick={() => { this.selectTime(this.state.timeSlots[i]) }}
                    className={this.state.timeSlots[i] == this.state.selectSlot ? "active-slot day" : 'day'}
                    sm={3}>{this.state.timeSlots[i]}</Col>
            );
        }
        return days;
    }

    getTimeStops(start, end) {
        var startTime = moment(start, 'HH:mm');
        var endTime = moment(end, 'HH:mm');

        if (endTime.isBefore(startTime)) {
            endTime.add(30, 'day');
        }

        var timeStops = [];

        while (startTime <= endTime) {
            timeStops.push(new moment(startTime).format('HH:mm'));
            startTime.add(30, 'minutes');
        }
        return timeStops;
    }
    render() {
        return (
            <div className="App">
               
                    <Container className="time-slow-size">
                        <Row>{this.timeSlots()}</Row>
                        <ul>
                            <li>
                                <Link to="/confirm">Confirm</Link>
                            </li>
                        </ul>
                    </Container>
            </div>
        );
    }
}

export default Calender;
