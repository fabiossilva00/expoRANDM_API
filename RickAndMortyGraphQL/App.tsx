import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/react-hooks'

import App from   './src/routes/index'

import store from './src/redux/store'

import apolloClient from './src/services/apolloClient'

export default class src extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <App />
        </Provider>      
      </ApolloProvider>
    )    
  }
}

