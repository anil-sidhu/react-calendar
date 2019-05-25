import React from 'react'
import { Container, Col, Row, Dropdown } from 'react-bootstrap';

class Day extends React.Component{

    constructor()
    {
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
            activeDays:""
          }
    }
    componentDidMount()
    {
        console.warn(this.props.styleAct)
    }
    selectDay(item) {
        this.props.activeDay(item)
        // console.warn(item)
    //     let data = {
    //       day: item,
    //       month: this.state.selectedMonth,
    //       year: this.state.selectYear
    //     }
    //     this.setState({ selectedDay: item, selectedDetails: data })
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.warn("test here",this.props.styleAct)
        if (prevProps!= this.props) {
           this.setState({activeDays:this.props.styleAct})
            return true
        }
        else { return false }
    }

    render()
    {
        return (
            <div 
          className="day"
          className={this.state.activeDays + ' day'}
          onClick={() => { this.selectDay(this.props.date) }}
            >{this.props.date}</div>
        )
    }
}
export default Day;