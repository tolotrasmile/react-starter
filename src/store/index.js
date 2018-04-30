import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = composeWithDevTools({})(applyMiddleware(thunk, promise()))
const store = createStore(reducers, middleware)

/** Export the store */
export default store
