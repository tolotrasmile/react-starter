import styled, { css } from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const defaultColor = 'palevioletred'

export const Heading = styled.h1`
  font-size: 2em;
  color: ${defaultColor};
`

export const StyledLink = styled(Link)`
  font-size: 1em;
  margin: 0 1em;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: all .1s ease-in;
  :hover {
    border-bottom: 4px solid white;
  }
`

export const StyledNavLink = styled(NavLink)`
  font-size: 1em;
  margin: 1em;
  color: white;
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
  transition: border .3s ease-in;
  border: 1px solid ${(props) => props.active ? defaultColor : '#eee'};
`

export const Button = styled.button`
  padding: .5em 1em;
  margin: 0 .5em .5em 0;
  border-radius: .2em;
  background: ${defaultColor};
  color: white;
  transition: background-color .3s ease-in;
  border: 1px solid ${defaultColor};

  ${props => !props.disabled && css`
    :hover {
      color: ${defaultColor};
      background: white;
      ${props => props.outline && css`
        background: ${defaultColor};
        color: white;
      `}
    }
  `}

  :focus, :active {
    outline: none;
  }

  ${props => props.outline && css`
    background: white;
    color: ${defaultColor};
  `}

  ${props => props.disabled && css`
    background: white;
    color: #d8d8d8;
    border: 1px solid #d8d8d8;
  `}
`

export const Hr = styled.hr`
  border: 0.5px solid ${defaultColor};
`
