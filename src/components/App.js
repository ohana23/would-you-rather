import '../styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';
import DashboardToggle from './DashboardToggle';
import Login from './Login';
import Nav from './Nav';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import QuestionPage from './QuestionPage';
import NotFound404 from './NotFound404';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { currentUser, loggedOut } = this.props;

    return (
      <Router>
        <div className='container'>
          <LoadingBar />

          {loggedOut 
            ? <Login /> 
            : <div>
                <Nav currentUser={currentUser.name}/>
                <hr></hr>
                <Switch>
                  <Route exact path='/' component={DashboardToggle} />
                  <Route path="/404" component={NotFound404} />
                  <Route exact path='/questions/:id' component={QuestionPage} />
                  <Route exact path='/add' component={NewQuestion} />
                  <Route exact path='/leaderboard' component={Leaderboard} />
                  <Route component={NotFound404} />
                </Switch>
              </div>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loggedOut: authedUser === null,
    currentUser: authedUser ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(App);