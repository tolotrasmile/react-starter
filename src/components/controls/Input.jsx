import React, { Component } from 'react'

class Input extends Component {
  state = { value: '' }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <input type='text' value={this.state.value} onChange={this.handleChange} />
    )
  }
}

export default Input
