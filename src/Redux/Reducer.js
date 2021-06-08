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
            
    
        default:
            return {
                ...state
            }
    }
}