import {useSelector, useDispatch } from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'

const SearchField = (props) => {
    const dispatch = useDispatch();
    
    const page = useSelector(state => state.currentPage)

    function changeHandler(e) {
        dispatch(Actions.requestList(e.target.value))
    }

    
    return(
        <div className="search grid-col-2">
        <form className="search__form">
            <label htmlFor="searchfield">
                <svg className="search__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
            </label>
            <input onChange={changeHandler} className="search__field textfield" id="searchfield" placeholder="Title, companies, expertise or benefits" />
            <button className="search__submit">Search</button>
        </form>
      </div>
    )
}

export default SearchField