import React, { Component }from 'react'

import moment from 'moment'
import 'moment-timezone';
import EventForm from '../EventForm';

export default class  CreateEvent extends Component {
    state = {
        currentTimezone: moment.tz.guess(),
        eventDate: moment().format('LL'),
        month: '',
        day: '',
        year: '',
      }
      
      onChange = (e) => {
        const selectValue = e.target.value;
        this.setState({currentTimezone: selectValue})
      } 
    render(){
  return (
    <div>
        <EventForm 
            months={moment.months()}
            currentTimezone = {this.state.currentTimezone}
            month = {moment().format('MMMM')}
            day = {moment().format('D')}
            year = {moment().format('Y')}
            hour = {moment().format('H')}
            minute = {moment().format('m')}
            zoneChange = {this.onChange}
        />

    </div>
  )
}
}
