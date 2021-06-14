import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './Reducer'
import thunk from 'redux-thunk'

const preloadedState = {
  awaitingResponse: false,
  results: [],
  currentPage: 1,
  filters: {
    schedule: "anySchedule",
    city: "anyCity"
  },
  searchString: '',
  searchMode: true,
  vacancy: {
    response_url: '#',
    name: 'Waiting for name',
    schedule: {
        id: 'remote'
    },
    created_at: '',
    employer: {
        name: 'Waiting for employer name',
        logo_urls: {
            '240': './static/img/no-image_90.png'
        }
    },
    area: {
        name: 'Earth (most likely)'
    }
}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(Reducer, preloadedState,  composeEnhancers(applyMiddleware(thunk)));

export default Store;