import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router'
import { auth } from './auth'
import { Redirect } from 'react-router-dom'
import Login from './components/Login'
import SignIn from './components/SignIn'
import { Button } from './components/Controls'
import { Wrapper } from './components/Wrapper'

// Rx Storybook
class App extends Component {
  render () {
    return (
      <Wrapper>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signin" component={SignIn}/>
          <AuthRoute path="/" component={Home}/>
          <AuthRoute path="/test" component={Home}/>
        </Switch>
      </Wrapper>
    )
  }
}

const Home = ({ history }) => (
  <div>
    <h1>Home</h1>
    <Button onClick={() => auth.signOut().then(() => history.push('/login'))}>Signout</Button>
  </div>
)

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (auth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
  )}/>
)

export default App
