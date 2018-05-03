import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Login from './components/auth/Login'
import SignIn from './components/auth/SignIn'
import { Wrapper } from './components/controls/Wrapper'
import Home from './components/Home'
import AuthRoute from './components/auth/AuthRoute'
import { Header } from './components/controls/Header'
import { Heading, StyledLink, StyledNavLink } from './components/controls/Controls'

// Rx Storybook
class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Header>
          <StyledLink to='test1'>Link1</StyledLink>
          <StyledNavLink to='test2'>Link2</StyledNavLink>
          <StyledLink to='test3'>Link3</StyledLink>
        </Header>
        <Wrapper>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signin" component={SignIn}/>
            <AuthRoute exact path="/" component={Home}/>
            <AuthRoute exact path="/test1" render={props => <Heading {...props}>Test1</Heading>}/>
            <AuthRoute exact path="/test2" component={Home}/>
            <AuthRoute exact path="/test3" component={Home}/>
          </Switch>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App
