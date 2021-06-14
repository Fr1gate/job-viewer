import {useDispatch, useSelector} from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'



const Filters = (props) => {
    const dispatch = useDispatch();
    const sched = useSelector(state => state.filters.schedule);
    const city = useSelector(state => state.filters.city);

    function radioChangeHandler(e) {
        dispatch(Actions.setFilter(e.target.name, e.target.id));
        dispatch(Actions.requestList())
    }

    function scheduleFilters() {
        return (
            <>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="anySchedule" type="radio" 
                        name="schedule" onChange={radioChangeHandler} 
                        checked={sched==='anySchedule'}/>Неважно
                </label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="fullTime" type="radio" 
                        name="schedule" onChange={radioChangeHandler}
                        checked={sched==='fullTime'}/>Full time
                </label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="remote" type="radio" 
                        name="schedule" onChange={radioChangeHandler}
                        checked={sched==='remote'}/>Удаленная работа
                </label>
            </>
        )
    }

    function cityFilters() {
        return (
            <>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="anyCity" type="radio" 
                        name="city" onChange={radioChangeHandler} 
                        checked={city==='anyCity'}/>Неважно</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="msk" type="radio" 
                        name="city" onChange={radioChangeHandler} 
                        checked={city==='msk'}/>Москва</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="spb" type="radio" 
                        name="city" onChange={radioChangeHandler} 
                        checked={city==='spb'}/>Санкт-Петербург</label>
                <label className="filters__label filters__label_radio">
                    <input className="filters__radio" id="tula" type="radio" 
                        name="city" onChange={radioChangeHandler} 
                        checked={city==='tula'}/>Тула</label>
            </>
        )
    }
    
    return(
        <aside className="filters">
            <form className="filters__form">
                <label className="filters__header">График</label>
                {scheduleFilters()}
                
                {/* <label className="filters__header" htmlFor="location-field">LOCATION</label>
                <input className="filters__textfield" name="location-field" id="location-field" placeholder="City, state, zip code or country" /> */}
                <label className="filters__header">Город</label>
                {cityFilters()}
                
            </form>
        </aside>
    )
}

export default Filters