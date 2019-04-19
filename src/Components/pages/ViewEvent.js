import React, { Component } from 'react'
import Timezones from '../Timezones'
import moment from 'moment'
import 'moment-timezone';
export default class ViewEvent extends Component {
    state = {
        name: '',
        timestamp: parseInt(this.props.match.params.timestamp, 10),
        currentTimezone: moment.tz.guess(),
    } 
    onChange = (e) => {
      const selectValue = e.target.value;
      this.setState({currentTimezone: selectValue})
    } 
    
     eventTime = () =>  moment.unix(this.state.timestamp).tz(this.state.currentTimezone).format('LT');
     eventDate = () => moment.unix(this.state.timestamp).tz(this.state.currentTimezone).format('MMMM Do YYYY');
  render() {
    console.log(this.state.timestamp);
    return (
      <div className="view-event-container">
        <h2>This Event Starts At</h2>
        <div className="event-time">
          <p>{this.eventTime()}</p>
          <p>{this.eventDate()}</p>
        </div>
        <h2>Your Time</h2>
        <Timezones 
          onChange={this.onChange} 
          userTimeZone={this.state.currentTimezone} 
          timezones={moment.tz.names()}
        />
      </div>
    )
  }
}

