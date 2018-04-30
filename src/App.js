import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router'
import { StyledNavLink } from './components/Controls'
import { Wrapper } from './components/Wrapper'
import Input from './components/Input'

class App extends Component {
  render () {
    return (
      <div>
        <nav>
          <StyledNavLink to='/'>Home</StyledNavLink>
        </nav>
        <div className='content'>
          <Input />
          <Switch>
            <Route exact path='/' component={() => <Wrapper>App</Wrapper>}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
