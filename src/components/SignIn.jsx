import React from 'react'
import { auth } from '../auth'
import { Redirect } from 'react-router-dom'

export default class SignIn extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    auth.authenticate((auth) => this.setState({ redirectToReferrer: auth }))
  }

  render () {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to='/home'/>
    }

    return (
      <div>
        <h1>Sign in</h1>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}
