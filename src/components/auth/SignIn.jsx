import React from 'react'
import { auth } from '../../auth'
import { Redirect } from 'react-router-dom'
import { Button } from '../controls/Controls'
import Wrapper from '../controls/Wrapper'

export default class SignIn extends React.Component {
  state = {
    redirectToReferrer: auth.isAuthenticated
  }

  login = () => {
    auth.authenticate().then(() => this.setState({ redirectToReferrer: auth }))
  }

  render () {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to='/'/>
    }

    return (
      <Wrapper>
        <h1>Sign in</h1>
        <Button onClick={this.login}>Log in</Button>
      </Wrapper>
    )
  }
}
