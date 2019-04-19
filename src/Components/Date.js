import React, { Component } from 'react'

export default class Date extends Component {

  render() {
    return (
        <div className="input-row">
            <div className="select-container">
                <label>Month</label>
                <select name="month" onChange={this.props.change} value={this.props.month}>
                    {this.props.months.map(month => ( <option  key={month}>{month}</option> ))}
                </select>
            </div>
            <div className="select-container">
                <label>Day</label>
                <select name="day" onChange={this.props.change} value={this.props.day}>
                    {this.props.daysinMonth.map(day => ( <option  key={day}>{day}</option> ))}
                </select>
            </div>
            <div className="select-container">
                <label>Year</label>
                <select name="year" onChange={this.props.change} value={this.props.year}>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                </select>
            </div>
        </div>
    );
  }
}
