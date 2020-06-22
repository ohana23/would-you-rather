import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import '../styles/App.css';
import DashboardToggle from './DashboardToggle';
import Login from './Login';

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
          : <DashboardToggle />}
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