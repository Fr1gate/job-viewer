import ActionTypes from './ActionTypes'

const Actions = {
    requestList: (searchString) => dispatch => {
        fetch(`https://api.hh.ru/vacancies?text=${searchString}`)
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
    },
    setCurrentPage: (payload) => {
        return {
            type: ActionTypes.SETCURRENTPAGE,
            payload: payload
        }
    }

}

export default Actions