import React, { Component } from 'react'
import { withRouter } from 'react-router'


class Error404 extends Component {
  redirect = () => {
    this.props.history.push('/')
  }
  componentDidMount = () => {
    this.timer = setTimeout(this.redirect, 3000);
  }

  render() {
    return (
      <div>
        <h1 className="error-404">Error 404<br></br>Page Not Found</h1>
        <h2 className="redirect">Redirecting to home page...</h2>
      </div>
    )
  }
}

export default withRouter(Error404)