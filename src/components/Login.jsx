import React from 'react'
import { auth } from '../auth'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
  state = {
    redirectToReferrer: false,
    signIn: false
  }

  login = () => {
    auth.authenticate((auth) => this.setState({ redirectToReferrer: auth }))
  }

  signIn = () => {
    auth.isSignIn = true;
    this.setState({ signIn: true })
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer, signIn } = this.state

    if (redirectToReferrer) {
      return <Redirect to='/home'/>
    }

    if (signIn) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <h1>Login</h1>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
        <button onClick={this.signIn}>Sign in</button>
      </div>
    )
  }
}
