import React, { Component } from 'react'

export default class Timezones extends Component {
  render() {
    return (
        <div className="select-container timezone-container">
        <label>Time Zone</label>
            <select className="time-zones" onChange={this.props.onChange} value={this.props.userTimeZone}>
                {this.props.timezones.map((timezone) => ( <option key={timezone} value={timezone}> {timezone} </option>))}
            </select>
        </div>
    )
        }
}
