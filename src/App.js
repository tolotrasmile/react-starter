import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router'
import { auth } from './auth'
import { Redirect } from 'react-router-dom'
import Login from './components/Login'

class App extends Component {
  render () {
    return (
      <div>
        <div className='content'>
          <Switch>
            <Route path="/login" render={(props) => auth.isAuthenticated ? <Redirect to='/' />: <Login {...props} />}/>
            <AuthRoute path="/" component={Home}/>
            <AuthRoute path="/test" component={Home}/>
          </Switch>
        </div>
      </div>
    )
  }
}

const Home = ({ history }) => console.log(auth.isAuthenticated) || (
  <div>
    <h1>Home</h1>
    <button onClick={() => auth.signOut(() => history.push('/login'))}>Signout</button>
  </div>
)

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    props => {
      return auth.isAuthenticated ?
        <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
    }
  }/>
)

export default App
