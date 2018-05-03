import styled, { css } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const defaultColor = 'palevioletred'

export const Heading = styled.h1`
  font-size: 2em;
  color: ${defaultColor};
`

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
  color: ${defaultColor};
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
  margin: .5em auto;
  border-radius: .2em;
  :focus, :active {
    outline: none;
  }
  border: 1px solid ${(props) => props.active ? defaultColor : '#eee'};
`

export const Button = styled.button`
  padding: .5em 1em;
  margin: 0 .5em .5em 0;
  border-radius: .2em;
  background: ${defaultColor};
  color: white;
  border: none;
  :focus, :active {
    outline: none;
  }

  ${props => props.outline && css`
    background: white;
    color: ${defaultColor};
    border: 1px solid ${defaultColor};
  `}

  ${props => props.disabled && css`
    background: white;
    color: #eee;
    border: 1px solid #eee;
  `}
`
