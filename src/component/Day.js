import React from 'react'
import ActiveComponentContainer from '../containers/ActiveComponentContainer';

class Day extends React.Component {
    constructor() {
        super()
        this.state = {
            month: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
            selectedMonth: 4,
            selectedMonthNumber: 2019,
            CalenderDays: undefined,
            currentYear: '2019',
            selectYear: '2019',
            totalDayMonth: 31,
            selectedDay: undefined,
            selectedDetails: undefined,
            activeDays: "",
            activeComponent: false
        }
    }
    selectDay(item) {
        this.props.activeDay(item)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps != this.props && prevProps != this.props.activeComponent) {
            this.setState({ activeDays: this.props.activeComponent != "" ? "activeDays" : "" })
            return true
        }
        else { return false }
    }
    applyActiveComponent() {
        this.setState({ activeComponent: true })
    }

    render() {
        return (
            <div
                className="day"
                className={this.state.activeDays + ' day'}
                onClick={() => {
                    this.selectDay(this.props.date)
                }}
            >
                {
                    this.props.activeComponent != "" ?
                        <div>
                            <ActiveComponentContainer monthAndYear={this.props.selectedMnY} />
                        </div> : <div>
                            <a onClick={() => { this.applyActiveComponent() }} className="edit-a" href="#">
                                <span className="glyphicon glyphicon-pencil"></span>
                                <span className="days-date">{this.props.date}</span>
                            </a>
                        </div>
                }
            </div>
        )
    }
}
export default Day;