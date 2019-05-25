import React from 'react'
import TimeContainer from '../containers/TimeContainer';
import { Button } from 'react-bootstrap';
import { bookingData } from '../actions';
import { withRouter } from "react-router-dom";
class ActiveComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            timeSlot: "",
            title: "",
            bookCollection: {

            }
        }
    }
    getTimefromChild(timeSlow) {
        console.warn("getTimefromChild", timeSlow)
        this.setState({ timeSlot: timeSlow })
    }
    async booking() {
        let bookingData = {
            timeSlot: this.state.timeSlot,
            title: this.state.title,
            month:this.props.monthAndYear.month,
            year:this.props.monthAndYear.year 

        }
        await this.setState({ bookCollection: bookingData })
        this.props.bookingData(this.state.bookCollection)
        console.warn("bookingData", this.state.bookCollection,this.props.monthAndYear)
        this.props.history.push('/Appointments')
    }
    render() {
        return (<div>
            <TimeContainer getTime={this.getTimefromChild.bind(this)} />
            <textarea onChange={(text) => this.setState({ title: text.target.value })}>
            </textarea>
            <Button className="book-btn" onClick={() => { this.booking() }} >Book</Button>

        </div>)
    }
}


export default withRouter(ActiveComponent);