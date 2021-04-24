import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login'
import Leaderboard from './Leaderboard'
import Home from './Home'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : this.props.authedUser === null ? <Login /> : <Home />
        }
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
