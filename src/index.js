import './index.css'

import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

const app = (
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))
registerServiceWorker()
