import React, { Component } from 'react'
import { Button, Heading } from './controls/Controls'
import { auth } from '../auth'

export default class Home extends Component {
  render () {
    const { history } = this.props
    return (
      <div>
        <Heading>Home</Heading>
        <p>Home component</p>
        <hr/>
        <p>Home component</p>
        <Button onClick={() => auth.signOut().then(() => history.push('/login'))}>Sign out</Button>
      </div>
    )
  }
}
