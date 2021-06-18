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
                results: action.payload,
                currentPage: 1
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
        case ActionTypes.SWITCHSEARCHMODE: {
            let newSearchMode = !(state.searchMode)
            return {
                ...state,
                searchMode: newSearchMode
            }
        }
        case ActionTypes.GETJOBSUCCESS: {
            return {
                ...state,
                vacancy: action.payload
            }
        }
        
        default:
            return {
                ...state
            }
    }
}