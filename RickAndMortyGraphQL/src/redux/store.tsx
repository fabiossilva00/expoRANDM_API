import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import Combine from './reducer/combineReducers'

const store = createStore(Combine, applyMiddleware(thunk))

export default store