import ActionTypes from './ActionTypes'


export default function Reducer (state, action) {
    switch (action.type) {
        case ActionTypes.SETCURRENTPAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        
        case ActionTypes.GETLISTSUCCESS: {
            return {
                ...state,
                results: action.payload
            }
        }
        case ActionTypes.SETFILTER: {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload[0]]: action.payload[1]
                }
            }
        }
        case ActionTypes.SETSEARCHSTRING: {
            return {
                ...state,
                searchString: action.payload
            }
        }
        
        default:
            return {
                ...state
            }
    }
}