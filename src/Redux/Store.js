import { createStore, applyMiddleware } from 'redux'
import Reducer from './Reducer'
import thunk from 'redux-thunk'

const preloadedState = {
  results: [],
  currentPage: 1,
  filters: {

  },
  searchMode: true
}

const Store = createStore(Reducer, preloadedState, applyMiddleware(thunk))

export default Store;