import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const StyledLink = styled(Link)`
  font-size: 1em;
  margin: 1em;
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;
`

export const StyledNavLink = styled(NavLink)`
  font-size: 1em;
  margin: 1em;
  color: palevioletred;
  font-weight: bold;
  text-decoration: none;
`

export const Label = styled.label`
  margin-bottom: 1em;
`

export const FormGroup = styled.div`
  font-size: 1em;
  margin-bottom: .5em;
`

export const Input = styled.input`
  padding: .5em;
  margin: .5em 0;
  border-radius: .2em;
  border: 1px solid ${(props) => props.color ? props.color : '#eee'}
`

export const Button = styled.button`
  padding: .5em 1em;
  margin: 0 .5em .5em 0;
  border-radius: .2em;
  background: ${props => props.outline ? 'white' : 'palevioletred'};
  color: ${props => props.outline ? 'palevioletred' : 'white'};
  border: ${props => props.outline ? '1px solid palevioletred' : 'none'};
`
