import { connect, useSelector, useDispatch } from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'

const Filters = (props) => {
    const dispatch = useDispatch();
    
    const page = useSelector(state => state.currentPage)

    
    return(
        <aside className="filters">
            <form className="filters__form">
                <label className="filters__label">
                    <input className="filters__checkbox" type="checkbox" name="fulltime" />Full time</label>
                <label className="filters__header" htmlFor="location-field">LOCATION</label>
                <input className="filters__textfield" name="location-field" id="location-field" placeholder="City, state, zip code or country" />
                <label className="filters__label filters__label_radio">
                <input className="filters__radio" id="London" type="radio" name="city" />London</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="Amsterdam" type="radio" name="city" />Amsterdam</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="NewYork" type="radio" name="city" />New York</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="Berlin" type="radio" name="city" />Berlin</label>
            </form>
        </aside>
    )
}

export default Filters






