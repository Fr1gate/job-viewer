import ActionTypes from './ActionTypes'

const Actions = {
    pageUp: () => {
        return {
            type: ActionTypes.PAGEUP
        }
    },
    requestList: (searchString) => dispatch => {
        // fetch(`https://jobs.github.com/positions.json`)
        // .then(response => response.json())
        // .then(res => dispatch(Actions.getListSuccess(res)))
        let result = fetch(`https://api.hh.ru/vacancies?text=${searchString}`)
            .then(res => {
                return res.json()
            })
            .then(json => {
                dispatch(Actions.getListSuccess(json.items))
            })
        
        
    },
    getListSuccess: (payload) => {
        return {
            type: ActionTypes.GETLISTSUCCESS,
            payload: payload
        }
    }

}

export default Actions