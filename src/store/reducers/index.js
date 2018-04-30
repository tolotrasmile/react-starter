import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import counter from './counter.reducer'

export default combineReducers({ counter, form: reduxForm })
