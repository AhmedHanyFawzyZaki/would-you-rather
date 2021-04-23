import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Login from './Login'

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
          : <Login />
        }
      </Fragment>
    )
  }
}


function mapStateToProps({ loadingBar }) {
  return {
    loading: loadingBar.default === 1,
  }
}

export default connect(mapStateToProps)(App);
