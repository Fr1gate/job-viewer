import React from 'react'

const Card = (props) => {
    return(
        <div className="card">
            <img className="card__img" src={props.logo? props.logo[240]: './static/img/bmw.jpg'} alt="" />
            <div className="card__info">
                <h2 className="card__company">{props.empName}</h2>
                <h3 className="card__job-name">{props.name}</h3>
                <div className="card__bottom-wrap">
                <ul className="labels card__labels">
                    <li className="label">Full time</li>
                    <li className="label">Remote</li>
                </ul>
                <div className="card__bottom-right">
                    <span className="card__location location">{props.area}</span>
                    <span className="card__date date">5 days ago</span></div>
                </div>
            </div>
        </div>
    )
}

export default Card