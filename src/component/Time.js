import React from 'react';
import moment from 'moment'
import { Container, Col, Row, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
const date = new Date();
class Calender extends React.Component {
    constructor() {
        super()
        this.state = {
            timeSlots: [],
            selectSlot: "select Time"
        }
    }

    componentDidMount() {
        var timeStops = this.getTimeStops('00:00', '23:30');
        this.setState({ timeSlots: timeStops })
    }
    selectTime(slot) {
        this.setState({ selectSlot: slot })
        console.warn("slot", slot)
        this.props.getTime(slot)
    }
    timeSlots() {
        const days = [];
        for (let i = 0; i <= this.state.timeSlots.length - 1; i++) {
            days.push(
                <Dropdown.Item  onClick={() => { this.selectTime(this.state.timeSlots[i]) }} key={i} as="button">{this.state.timeSlots[i]}</Dropdown.Item>
            )
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
    booking() {
        let data = this.props.data;
        data.time = this.state.selectSlot;
        this.props.bookingData(data)
        this.props.history.push('/Appointments')
    }
    render() {
        return (
            <div className="App time">
                <DropdownButton id="dropdown-item-button" title={this.state.selectSlot}>
                    <Row className="slot-wrapper">{this.timeSlots()}</Row>

                </DropdownButton>
            </div>
        );
    }
}

export default withRouter(Calender);
