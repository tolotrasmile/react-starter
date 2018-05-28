import { combineReducers } from 'redux'
import counter from './counter.reducer'
import { reducer as reduxForm } from 'redux-form'

export default combineReducers({ counter, form: reduxForm })
