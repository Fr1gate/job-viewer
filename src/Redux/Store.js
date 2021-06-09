import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './Reducer'
import thunk from 'redux-thunk'

const preloadedState = {
  results: [],
  currentPage: 1,
  filters: {

  },
  searchString: '',
  searchMode: true
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Reducer, preloadedState,  composeEnhancers(applyMiddleware(thunk)));

export default Store;