import React, { Component } from 'react'
import Time from './Time'
import Date from './Date'
import Timezones from './Timezones'
import { withRouter } from 'react-router'
import moment from 'moment'
import 'moment-timezone'
class EventForm extends Component {
    state = {
        month: this.props.month, 
        day: this.props.day, 
        year: this.props.year, 
        hour: this.props.hour, 
        minute: this.props.minute,
        format: '24',
        submitted: false,
        eventLink: '',
    }
    checkFormat = () => {
      if(this.state.format === '24'){
        return 24
      }
      return 12
    }
    createNumArray  = (amount) =>{
      let array = [];
      if(amount === 24 || amount === 59){
        for(let i = 0; i <= amount; i+=1){
          array.push(i);
        }
      }else{
        for(let i = 1; i <= amount; i+=1){
          array.push(i);
        }
      }

      return array
    }
     generateTimeLink = (e) => {
        e.preventDefault();
        const timestamp = moment.tz(`${this.state.month}-${this.state.day}-${this.state.year} ${this.state.hour}:${this.state.minute} ${this.state.format}`,'MMMM-DD-Y H:m a', `${this.props.currentTimezone}`).format('X')
        this.props.history.push(`/share/${timestamp}`)
      }
    onChange = (e) => {
        if(e.target.name === "format" && this.state.hour > 12 || this.state.hour === 0){
            this.setState({[e.target.name]: 1})
        }else{
            this.setState({[e.target.name]: e.target.value})
        }
    };
  render() {

    return (
      <div>
        
        <form onSubmit={this.generateTimeLink}>
        <h1 className="create-title">Create Event Time Link</h1>
            <Date 
            months={this.props.months} 
            change={this.onChange}
            month={this.state.month}
            day={this.state.day}
            year={this.state.year}
            daysinMonth={this.createNumArray(moment(`${this.state.year}-${this.state.month}`, "YYYY-MMMM").daysInMonth())}
            />
            <Time 
                change={this.onChange}
                hour={this.state.hour}
                minute={this.state.minute}
                hoursArray={this.createNumArray(this.checkFormat())}
                minutesArray={this.createNumArray(59)}
                format = {this.state.format}
            />
        <div className="input-row">
          <Timezones 
            onChange={this.props.zoneChange} 
            userTimeZone={this.props.currentTimezone} 
            timezones={moment.tz.names()}
        />
     
            </div>
            <input 
            type="submit"
            value="Create Time Link"
            
            />
        </form>
        
      </div>
    )
  }
}
export default withRouter(EventForm)
