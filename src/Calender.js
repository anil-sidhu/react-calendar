import React from 'react';
import './App.css';
import { Container, Row, Dropdown } from 'react-bootstrap';
import Day from './component/Day'

const date = new Date();
class Calender extends React.Component {
  constructor() {
    super()
    this.state = {
      month: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
      selectedMonth: 4, //will  be dynamic
      selectedMonthNumber: 2019, //will  be dynamic
      CalenderDays: undefined,
      currentYear: '2019', //will  be dynamic
      selectYear: '2019', //will  be dynamic
      totalDayMonth: 31, //will  be dynamic
      selectedDay: undefined,
      selectedMnY: undefined,
      activeComponent: ""
    }
  }

  activeDay(item) {
    this.setState({ activeComponent: item })
  }
  days(totalDayMonth) {
    const days = [];
    for (let i = 1; i <= totalDayMonth; i++) {
      days.push(
        <Day
          activeComponent={this.state.activeComponent == i ? "activeComponent" : ""}
          activeDay={this.activeDay.bind(this)}
          key={i}
          date={i}
          selectedMnY={
            {
              month: this.state.selectedMonth,
              year: this.state.selectYear
            }
          }
        />
      );
    }
    return days;
  }
  selectDay() {
    let data = {
      month: this.state.selectedMonth,
      year: this.state.selectYear
    }
    this.setState({selectedMnY: data })
  }
  componentDidMount() {
    this.setState(
      {
        selectedMonth: this.state.month[date.getMonth()],
        selectedMonthNumber: date.getMonth()
      })
  }
  async changeMonth(flag) {

    if (flag == 'plus' && this.state.selectedMonthNumber <= 12) {
      await this.setState({
        selectedMonthNumber: this.state.selectedMonthNumber + 1,
      })
    }
    else {
      if (this.state.selectedMonthNumber > 0) {
        await this.setState({
          selectedMonthNumber: this.state.selectedMonthNumber - 1,
        })
      }
    }
    this.setState({
      selectedMonth: this.state.month[this.state.selectedMonthNumber]
    })
    await this.daysInMonth(this.state.selectedMonthNumber)
  }
  async daysInMonth(monthNumber) {
    let data = await new Date(this.state.selectYear, monthNumber + 1, 0).getDate();
    await this.setState({ totalDayMonth: data })
  }
  years() {
    const yrs = [];
    for (let i = this.state.currentYear; i <= 2022; i++) {
      yrs.push(
        <Dropdown.Item
          key={i}
          onClick={() => { this.selectYear(i) }} className="day" sm={1}>
          {i}
        </Dropdown.Item>
      );
    }

    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {this.state.selectYear}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {yrs}
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  selectYear(yr) {
    this.setState({ selectYear: yr })
  }
  render() {
    return (
      <div className="App">
        <Container className="size">
          <Row>
            {this.years()}
          </Row>
          <Row>
            <button className="select-month" onClick={() => { this.changeMonth('minus') }}>
              {"<<"}</button>
            <span className="current-month">{this.state.selectedMonth}</span>
            <button className="month-rigth select-month" onClick={() => { this.changeMonth('plus') }} >{">>"}</button>
          </Row>
          <Row>
            {this.days(this.state.totalDayMonth)}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Calender;
