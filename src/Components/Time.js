import React, { Component } from 'react'

export default class Time extends Component {
  render() {
    return (
      <div className="input-row">
        <div className="select-container">
          <label>Hour</label>
          <select name="hour" onChange={this.props.change} value={this.props.hour}>
            {this.props.hoursArray.map(day => ( <option  key={day}>{day}</option> ))}
          </select>
        </div>
          <div className="select-container">
            <label>Minute</label>
            <select name="minute" onChange={this.props.change} value={this.props.minute}>
              {this.props.minutesArray.map(min => ( <option  key={min}>{min}</option> ))}
            </select>
          </div>
          <div className="select-container">
            <label>Format</label>
            <select name="format" onChange={this.props.change} value={this.props.format}>
              <option value="24">24 Hour</option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
      </div>
    )
  }
}
