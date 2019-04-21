import React, { Component } from 'react'

export default class ShareTimeLink extends Component {
  state = {
    isCopied: false
  }
  copyButton = () =>{
    if(this.state.isCopied){
      return 'Copied!'
    }
      return 'Copy'
  }
  copyLink = () =>{
    this.link.select()
    document.execCommand('copy');
    this.setState({isCopied: true})
  }
  componentDidMount = () =>{

  }
  render() {
  return (
    <div className="share-container">
        <h1>Here's your event time link share it!</h1>
        <a  href={`${window.location.origin.toString()}/view/event/${this.props.match.params.timeData}`}>{window.location.origin.toString()}/view/event/{this.props.match.params.timeData}</a>
        <textarea  style={{ opacity:'0',width:'0', overflow:'hidden',position: 'absolute',bottom:'0',right:'0',cursor:'default'}} ref={(textarea) => this.link = textarea} value={`${window.location.origin.toString()}/view/event/${this.props.match.params.timeData}`}>
       
          
        </textarea>
        <button onClick={this.copyLink.bind(this)}>{this.copyButton()}</button>
   </div>
  )
  }
}
