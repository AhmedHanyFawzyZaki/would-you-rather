import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { Switch, Route, Redirect } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute'
import NotFound from './NotFound'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Home from './Home'
import Nav from './Nav'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <Nav authedUser={this.props.authedUser} />
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/home" component={Home} />
          <Redirect exact from="/" to="/home" />
          <ProtectedRoute path="/leaderboard" component={Leaderboard} />
          <ProtectedRoute path="*" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}


function mapStateToProps({ loadingBar, authedUser }) {
  return {
    loading: loadingBar.default === 1,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
