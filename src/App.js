import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router'
import { auth } from './auth'
import { Redirect } from 'react-router-dom'
import Login from './components/Login'
import SignIn from './components/SignIn'

class App extends Component {
  render () {
    return (
      <div>
        <div className='content'>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signin" component={SignIn}/>
            <Auth path="/" component={Home}/>
          </Switch>
        </div>
      </div>
    )
  }
}

const Home = ({ history }) => (
  <div>
    <h1>Home</h1>
    <button onClick={() => auth.signOut(() => history.push('/login'))}>Signout</button>
  </div>
)

const Auth = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    props => {
      if (!auth.isAuthenticated) {
        const path = auth.isSignIn ? '/signin' : '/login'
        return <Redirect to={{ pathname: path, state: { from: props.location } }}/>
      }
      return <Component {...props} />
    }
  }/>
)

export default App
