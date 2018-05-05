import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Login from './components/auth/Login'
import SignIn from './components/auth/SignIn'
import Home from './components/Home'
import AuthRoute from './components/auth/AuthRoute'
import { Heading } from './components/controls/Controls'

// Rx Storybook
class App extends Component {
  render () {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signin" component={SignIn}/>
        <AuthRoute exact path="/" component={Home}/>
        <AuthRoute exact path="/test1" render={props => <Heading {...props}>Test1</Heading>}/>
        <AuthRoute exact path="/test2" component={Home}/>
        <AuthRoute exact path="/test3" component={Home}/>
      </Switch>
    )
  }
}

export default App
