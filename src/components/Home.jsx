import { Body, Footer, Header, Section } from './controls/Layouts'
import { Button, Heading, Hr, StyledLink } from './controls/Controls'
import React, { Component } from 'react'

import Wrapper from './controls/Wrapper'
import { auth } from '../auth'

export default class Home extends Component {
  render () {
    return (
      <Section>
        <Header>
          <StyledLink to='test1'>Link1</StyledLink>
          <StyledLink to='test2'>Link2</StyledLink>
          <StyledLink to='test4'>Link3</StyledLink>
        </Header>
        <Body>
          <Wrapper>
            <Heading>Home</Heading>
            <p>Home component</p>
            <Hr />
            <p>Home component</p>
            <Button onClick={this.signOut}>Sign out</Button>
          </Wrapper>
        </Body>
        <Footer><Wrapper>Footer</Wrapper></Footer>
      </Section>
    )
  }

  signOut = () => {
    const { history } = this.props
    auth.signOut().then(() => history.push('/login'))
  }

}
