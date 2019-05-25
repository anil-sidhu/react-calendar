import React from 'react';
import { Container, Button, Table, Jumbotron } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
class Appointments extends React.Component {
    constructor() {
        super()
        this.state = {
            bookingCollection: []
        }
    }
    componentDidMount() {
        this.setState({ bookingCollection: JSON.parse(localStorage.getItem("ApStorage")) })
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.bookingData != this.props.bookingData) {
            let oldData = JSON.parse(localStorage.getItem("ApStorage"));
            console.warn("oldData", oldData)
            let ApStorage = oldData ? oldData : []
            ApStorage.push(this.props.bookingData);
            localStorage.setItem('ApStorage', JSON.stringify(ApStorage))
            this.setState({ bookingCollection: ApStorage })
            return true
        }
        else { return false }
    }
    render() {
        return (
            <div className="App">
                <Container className="apointment-size">
                    <h1> Appointments List </h1>
                    <Button onClick={() => this.props.history.push('/')} variant="outline-success">More Booking</Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Dr Name</th>
                                <th>Title</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                    </Table>
                    {
                        this.state.bookingCollection ?
                            this.state.bookingCollection.map(function (item, i) {
                                return <Table key={i} striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td>{i}</td>
                                            <td>Bruce</td>
                                            <td>{item.timeSlot}</td>
                                            <td>{item.month},{item.year}</td>
                                            <td>Dr Strange</td>
                                            <td>{item.title}</td>
                                            <th> <Button variant="outline-danger">Cancel</Button></th>
                                        </tr>
                                    </tbody>
                                </Table>
                            })
                            : <Jumbotron>
                                <h1>No Appointments Booked Yet</h1>
                                <Button onClick={() => this.props.history.push('/')} variant="primary">Make First Booking</Button>
                            </Jumbotron>
                    }
                </Container>
            </div>
        );
    }
}

export default withRouter(Appointments);
