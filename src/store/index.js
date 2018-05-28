import { applyMiddleware, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import promise from 'redux-promise-middleware'
import reducers from './reducers'
import thunk from 'redux-thunk'

const middleware = composeWithDevTools({})(applyMiddleware(thunk, promise()))
const store = createStore(reducers, middleware)

/** Export the store */
export default store
