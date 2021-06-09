import React from 'react'

const Card = (props) => {
    const jobBorn = new Date(props.date);
    const timeNow = new Date;
    const jobDays = Math.floor((timeNow - jobBorn) / 86400000);
    const jobHours = Math.floor((timeNow - jobBorn) / 3600000);

    function date() {
        if (jobDays > 0) {
            if (jobDays > 10 && jobDays < 15)
                return (<>{jobDays} дней</>)
            switch (jobDays%10) {
                case 1: return (<>{jobDays} день</>)
                case 2: 
                case 3: 
                case 4: 
                    return (<>{jobDays} дня</>)
                default: return (<>{jobDays} дней</>)
            }
        }            
        else {
            if (jobHours > 10 && jobHours < 15)
                return (<>{jobHours} часов</>)
            switch (jobHours%10) {
                case 1: return (<>{jobHours} час</>)
                case 2: 
                case 3: 
                case 4: 
                    return (<>{jobHours} часа</>)
                default: return (<>{jobHours} часов</>)
            }
        }
    }

    return(
        <div className="card">
            <div className="card__img-wrapper" style={{width: '90px', height: '90px'}}>
                <img className="card__img" src={props.logo? props.logo[240]: './static/img/bmw.jpg'} alt="" />
            </div>
            <div className="card__info">
                <h2 className="card__company">{props.empName}</h2>
                <h3 className="card__job-name">{props.name}</h3>
                <div className="card__bottom-wrap">
                <ul className="labels card__labels">
                    {props.schedule==="fullDay"?(<li className="label">Полный день</li>):''}
                    {props.schedule==="remote"?(<li className="label">Удаленная работа</li>):''}
                </ul>
                <div className="card__bottom-right">
                    <span className="card__location location">{props.area}</span>
                    <span className="card__date date">{date()}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Card