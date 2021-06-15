import React from 'react'
import {useDispatch} from 'react-redux'
import Actions from '../../Redux/Actions'
import './Card.scss'
import calcDate from '../../features/calcDate'
import noImg from '../../img/no-image_90.png'

const Card = (props) => {
    const dispatch = useDispatch();

    function jobClickHandler(e) {
        dispatch(Actions.switchSearchMode());
        dispatch(Actions.requestJob(props.id));
    }

    return(
        <div className="card">
            <div className="card__img-wrapper">
                <img className="card__img" src={props.logo? props.logo[240]: noImg} alt={`${props.empName} logo`} />
            </div>
            <div className="card__info">
                <h2 className="card__company">{props.empName}</h2>
                <h3 className="card__job-name" onClick={jobClickHandler}>{props.name}</h3>
                <div className="card__bottom-wrap">
                <ul className="labels card__labels">
                    {props.schedule==="fullDay"?(<li className="label">Полный день</li>):''}
                    {props.schedule==="remote"?(<li className="label">Удаленная работа</li>):''}
                </ul>
                <div className="card__bottom-right">
                    <span className="card__location location">{props.area}</span>
                    <span className="card__date date">{calcDate(props.date)}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Card