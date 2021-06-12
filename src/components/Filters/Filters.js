import {useDispatch} from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'

const Filters = (props) => {
    const dispatch = useDispatch();

    function radioChangeHandler(e) {
        dispatch(Actions.setFilter(e.target.name, e.target.id));
        dispatch(Actions.requestList())
    }
    
    return(
        <aside className="filters">
            <form className="filters__form">
                <label className="filters__header">График</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="anySchedule" type="radio" 
                        name="schedule" onChange={radioChangeHandler}/>Неважно
                </label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="fullTime" type="radio" 
                        name="schedule" onChange={radioChangeHandler}/>Full time</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="remote" type="radio" 
                        name="schedule" onChange={radioChangeHandler}/>Удаленная работа</label>
                {/* <label className="filters__header" htmlFor="location-field">LOCATION</label>
                <input className="filters__textfield" name="location-field" id="location-field" placeholder="City, state, zip code or country" /> */}
                <label className="filters__header">Город</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="anyCity" type="radio" 
                        name="city" onChange={radioChangeHandler} />Неважно</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="msk" type="radio" 
                        name="city" onChange={radioChangeHandler} />Москва</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="spb" type="radio" 
                        name="city" onChange={radioChangeHandler} />Санкт-Петербург</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="tula" type="radio" 
                        name="city" onChange={radioChangeHandler} />Тула</label>
            </form>
        </aside>
    )
}

export default Filters