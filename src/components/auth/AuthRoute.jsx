import { auth } from '../../auth'
import { Redirect, Route } from 'react-router-dom'
import * as React from 'react'

export default ({ component: Component, render, ...rest }) => {
  if (Component) {
    return <Route {...rest} render={props => auth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: rest.location } }}/>
    }/>
  }
  if (render) {
    return <Route {...rest} render={props => auth.isAuthenticated === true
      ? render(props)
      : <Redirect to={{ pathname: '/login', state: { from: rest.location } }}/>}
    />
  }
  throw new Error('You must specify your component or render function in props')
}
