import React from 'react'
import { Provider } from 'react-redux'

import App from   './src/routes/index'

import store from './src/redux/store'

export default class src extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>      
    )    
  }
}

