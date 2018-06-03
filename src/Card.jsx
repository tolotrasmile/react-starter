import './Card.css'

import { compose, withHandlers, withState } from 'recompose'

import React  from 'react'

const Card = ({ open, handleClick, title, description }) => (
  <div className={open ? 'card open': 'card' }>
    <h1>{title}</h1>
    <p>{description}</p>
    <p>{open}</p>
    <button onClick={handleClick}>
      {open?'Disable':'Enable'}
    </button>
  </div>
)

const enhance = compose(
  withState('open', 'toggle', false),
  withHandlers({
    handleClick: props => event => props.toggle(!props.open)
  })
)

export default enhance(Card)
