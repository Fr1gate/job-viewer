import ActionTypes from './ActionTypes'


export default function Reducer (state, action) {
    switch (action.type) {
        case ActionTypes.PAGEUP:
            return {
                ...state,
                currentPage: state.currentPage + 1
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