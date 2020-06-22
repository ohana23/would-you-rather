import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import '../styles/App.css';
import DashboardToggle from './DashboardToggle';
// import LoadingBar from 'react-redux-loading';
import Login from './Login';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <Login />
        {this.props.loading === true
          ? null
          : <div><NewQuestion /> <DashboardToggle /></div>}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);