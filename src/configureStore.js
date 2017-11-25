import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import annotateReducer from './reducers'

export default function configureStore(state) {
  return createStore(
    annotateReducer,
    state,
    applyMiddleware(
      thunkMiddleware
    )
  )
}