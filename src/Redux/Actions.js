import ActionTypes from './ActionTypes';
import Store from '../Redux/Store'

const Actions = {
    requestList: () => dispatch => {
        let searchString = Store.getState().searchString;
        let filters = Store.getState().filters;

        if (Object.keys(filters).length > 0)
            Object.keys(filters).forEach(element => {
                switch (element) {
                    case 'schedule':
                        switch (filters[element]) {
                            case 'fullTime':
                                searchString += `&schedule=fullDay`
                                break;
                            case 'remote':
                                searchString += `&schedule=remote`
                                break;
                            default:
                                break;
                        }
                        break;
                    case 'city':
                        switch (filters[element]) {
                            case 'msk':
                                searchString += `&area=1`
                                break;
                            case 'spb':
                                searchString += `&area=2`
                                break;
                            case 'tula':
                                searchString += `&area=92`
                                break;
                            default:
                                break;
                        }
                    break;
                
                    default:
                        break;
                }
            });


        fetch(`https://api.hh.ru/vacancies?text=${searchString}&per_page=100`)
            .then(res => {
                if (res.ok)
                    return res.json()
            })
            .then(json => {
                dispatch(Actions.getListSuccess(json.items))
            })
            .catch(err => {
                console.error(err.message)
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
    },
    setFilter: (key, value) => {
        return {
            type: ActionTypes.SETFILTER,
            payload: [key, value]
        }
    },
    setSearchString: (payload) => {
        return {
            type: ActionTypes.SETSEARCHSTRING,
            payload: payload
        }
    }

}

export default Actions