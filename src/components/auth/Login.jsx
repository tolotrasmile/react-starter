import React from 'react'
import { auth } from '../../auth'
import { Redirect } from 'react-router-dom'
import { Form, Field, reduxForm } from 'redux-form'
import { Label, Input, FormGroup, Button, Heading } from '../controls/Controls'
import Wrapper from '../controls/Wrapper'

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
    const { handleSubmit, pristine, submitting } = this.props

    if (redirectToReferrer) {
      return <Redirect to={from}/>
    }

    if (signIn) {
      return <Redirect to='/signin'/>
    }

    return (
      <Wrapper>
        <Form onSubmit={handleSubmit(this.login)}>
          <Heading>Login</Heading>
          <p>You must log in to view the page at {from.pathname}</p>
          <Field name='login' label='Login' type='text' component={this.renderInput}/>
          <Field name='password' label='Password' type='password' component={this.renderInput}/>
          <div>
            <Button disabled={pristine || submitting} outline active={false} type='submit'>Login</Button>
            <Button onClick={this.signIn}>Sign in</Button>
          </div>
        </Form>
      </Wrapper>
    )
  }

  renderInput = ({ input, label, type, ...rest}) => (
    <FormGroup>
      <Label>{label}</Label>
      <div style={{margin: 'auto'}}>
        <Input {...input} placeholder={label} type={type} active={rest.meta.active} />
      </div>
    </FormGroup>
  )
}

export default reduxForm({form: 'loginForm'})(Login)
