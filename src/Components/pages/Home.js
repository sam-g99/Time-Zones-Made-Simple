import React from 'react'
import { withRouter } from 'react-router'
class Home extends React.Component {
    makeEvent = () => {
        this.props.history.push(`/create/event`)
    }
    render(){
    return (
        <div style={containerStyle}>
        <h1 className="logo-home fade-in">Time Zones<br></br>Made Simple</h1>
            <button className="event-button-home buttonin" onClick={this.makeEvent}>Create Link</button>
        </div>
    )
    }
}
const containerStyle = {
    display: 'flex',
    alignContent: 'center',
    flexFlow: 'column'
}


export default withRouter(Home)