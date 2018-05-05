import React, { Component } from 'react'
import { auth } from '../auth'
import { Body, Footer, Header, Section, Sidebar } from './controls/Layouts'
import { Button, Heading, StyledLink, StyledNavLink } from './controls/Controls'
import Wrapper from './controls/Wrapper'

export default class Home extends Component {
  render () {
    const { history } = this.props
    return (
      <Section>
        <Header>
          <StyledLink to='test1'>Link1</StyledLink>
          <StyledNavLink to='test2'>Link2</StyledNavLink>
          <StyledLink to='test3'>Link3</StyledLink>
        </Header>
        <Body>
          <Wrapper>
            <Heading>Home</Heading>
            <p>Home component</p>
            <hr/>
            <p>Home component</p>
            <Button onClick={() => auth.signOut().then(() => history.push('/login'))}>Sign out</Button>
          </Wrapper>
        </Body>
        <Footer><Wrapper>Footer</Wrapper></Footer>
      </Section>
    )
  }
}
