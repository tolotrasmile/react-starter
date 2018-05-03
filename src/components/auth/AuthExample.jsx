import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, withRouter } from 'react-router-dom'
import { auth } from '../../auth'
import Login from './Login'

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const AuthExample = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/public">Public Page</Link></li>
        <li><Link to="/protected">Protected Page</Link></li>
      </ul>
      <Route path="/public" component={Public}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/protected" component={Protected}/>
    </div>
  </Router>
)

const AuthButton = withRouter(({ history }) =>
  auth.isAuthenticated ? (
    <p>Welcome!{' '}
      <button onClick={() => auth.signOut(() => history.push('/'))}>
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated ?
        (<Component {...props} />)
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }}/>)
    }
  />
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

export default AuthExample
