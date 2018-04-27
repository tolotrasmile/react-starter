import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router'
import { StyledNavLink } from './components/Controls'

class App extends Component {
  render () {
    return (
      <div>
        <nav>
          <StyledNavLink to='/'>Posts App</StyledNavLink>
        </nav>
        <div className='content'>
          <Switch>
            <Route exact path='/' component={() => <div>App</div>}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
