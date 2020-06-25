import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import DashboardToggle from './DashboardToggle';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loggedOut } = this.props;

    return (
      <Router>
        <div className='container'>
          <LoadingBar />

          {loggedOut 
            ? <Login /> 
            : <div>
                <Nav authedUser={authedUser}/>
                <Route exact path='/' component={DashboardToggle} />
                <Route path='/questions/:id' component={QuestionPage} />
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