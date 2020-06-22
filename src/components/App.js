import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import '../styles/App.css';
import DashboardToggle from './DashboardToggle';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      // <Router>
      //       <div>
      //         <Login />
      //         {this.props.loggedOut === true
      //           ? null
      //           : <div><NewQuestion /> <DashboardToggle /></div>}
      //       </div>
      // </Router>
      <Router>
      <Leaderboard />
        <div className='container'>
          {this.props.loggedOut 
            ? <Login /> 
            : <div>
                <Nav />
                <Route exact path='/' component={DashboardToggle} />
                <Route exact path='/add' component={NewQuestion} />
                <Route exact path='/leaderboard' component={Leaderboard} />
              </div>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedOut: authedUser === null
  }
}

export default connect(mapStateToProps)(App);