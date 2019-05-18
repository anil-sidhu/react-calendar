import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Dropdown } from 'react-bootstrap';
const date = new Date();

class Calender extends React.Component {
  constructor() {
    super()
    this.state = {
      month: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'spet', 'oct', 'nov', 'dec'],
      selectedMonth: undefined,
      selectedMonthNumber: undefined,
      CalenderDays: undefined,
      currentYear: '2019',
      selectYear:'2019',
      totalDayMonth: 31,
    }
  }
  days(totalDayMonth) {
    const days = [];
    for (let i = 0; i <= totalDayMonth; i++) {
      days.push(
        <Col onClick={() => { this.selectDay(i) }} className="day" sm={1}>{i}</Col>
      );
    }
    return days;
  }
  selectDay(item) {
    alert(item)
  }
  componentDidMount() {
    this.setState(
      {
        selectedMonth: this.state.month[date.getMonth()],
        selectedMonthNumber: date.getMonth()
      })
  }
  changeMonth(flag) {
    if (flag == 'plus' && this.state.selectedMonthNumber <= 12) {
      this.setState({
        selectedMonthNumber: this.state.selectedMonthNumber + 1,
        selectedMonth: this.state.month[this.state.selectedMonthNumber]
      })
    }
    else {
      if (this.state.selectedMonthNumber > 0) {
        this.setState({
          selectedMonthNumber: this.state.selectedMonthNumber - 1,
          selectedMonth: this.state.month[this.state.selectedMonthNumber]
        })
        console.warn("else", this.state.selectedMonthNumber)
      }
    }
    this.daysInMonth(this.state.selectedMonthNumber)
    this.setState({
      selectedMonth: this.state.month[this.state.selectedMonthNumber]
    })

  }
  daysInMonth() {
    let data = new Date(this.state.selectYear, this.state.selectedMonthNumber, 0).getDate();
    this.setState({ totalDayMonth: data })
    console.warn(data, this.state.selectedMonthNumber)
  }
  years() {
    const yrs = [];
    for (let i = this.state.currentYear; i <= 2022; i++) {
      yrs.push(
        <Dropdown.Item href="#/action-2" 
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

  selectYear(yr)
  {
    this.setState({selectYear:yr})
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
