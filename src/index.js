import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
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
