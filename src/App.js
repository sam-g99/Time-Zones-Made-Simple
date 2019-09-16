import React, { Component } from 'react';
import Footer from './Components/Footer'
import CreateEvent from './Components/pages/CreateEvent'
import ShareTimeLink from './Components/pages/ShareTimeLink'
import ViewEvent from './Components/pages/ViewEvent'
import Error404 from './Components/pages/Error404'
import Home from './Components/pages/Home'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/create/event'>Create Link</Link>
      </nav>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/create/event' component={CreateEvent}/>
        <Route path='/share/:timeData' component={ShareTimeLink}/>
        <Route path='/view/event/:timestamp' component={ViewEvent}/>
        <Route  component={Error404}/>
      </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
