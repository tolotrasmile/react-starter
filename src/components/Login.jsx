import React from 'react'
import { auth } from '../auth'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Label, Input, FormGroup, Button } from './Controls'

class Login extends React.Component {
  constructor (props) {
    super(props)
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    this.state = {
      redirectToReferrer: auth.isAuthenticated,
      signIn: false,
      from
    }
  }

  login = (values) => {
    auth.authenticate(values).then((auth) => this.setState({ redirectToReferrer: auth }))
  }

  signIn = () => {
    this.setState({ signIn: true })
  }

  render () {
    const { redirectToReferrer, signIn, from } = this.state
    const { handleSubmit, pristine } = this.props

    if (redirectToReferrer) {
      return <Redirect to={from}/>
    }

    if (signIn) {
      return <Redirect to='/signin'/>
    }

    return (
      <form onSubmit={handleSubmit(this.login)}>
        <h1>Login</h1>
        <p>You must log in to view the page at {from.pathname}</p>
        <Field name='login' label='Login' type='text' component={this.renderInput}/>
        <Field name='password' label='Password' type='password' component={this.renderInput}/>
        <div>
          <Button disabled={pristine} outline active={false} type='submit'>Login</Button>
          <Button onClick={this.signIn}>Sign in</Button>
        </div>
      </form>
    )
  }

  renderInput = ({ input, label, type }) => (
    <FormGroup>
      <Label>{label}</Label>
      <div>
        <Input {...input} placeholder={label} type={type}/>
      </div>
    </FormGroup>
  )
}

export default reduxForm({form: 'loginForm'})(Login)
