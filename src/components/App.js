import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import DashboardToggle from './DashboardToggle';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loggedOut } = this.props;

    return (
      <Router>
        <div className='container'>
          {loggedOut 
            ? <Login /> 
            : <div>
                <Nav authedUser={authedUser}/>
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
    loggedOut: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);