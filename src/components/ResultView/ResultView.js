import {useSelector, useDispatch } from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'
import calcDate from '../../features/calcDate'
import './ResultView.scss'
import noImg from '../../img/no-image_90.png'

const ResultView = (props) => {
    const dispatch = useDispatch();
    
    const job = useSelector(state => state.vacancy);


    function returnClickHandler() {
        dispatch(Actions.switchSearchMode())
    }
    
    return(
        <>
            <aside className="info">
                <button className="info__link" onClick={returnClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                        viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
                    </svg> Назад к поиску </button>
                <h2 className="info__header">Как связаться</h2>
                <p className="info__text">Пожалуйста используйте эту ссылку для ответа на вакансию:<br />  
                    <a rel="noreferrer"
                        target="_blank"
                        href={job.response_url?job.response_url:`https://hh.ru/vacancy/${job.id}`}>
                        открыть оригинал</a>
                </p>
            </aside>
            <div className="job">
                <div className="job__title">
                    <h2 className="job__header">{job.name?job.name:''}</h2>
                    <ul className="job__labels labels">
                        {job.schedule.id==="fullDay"?(<li className="label job__label">Полный день</li>):''}
                        {job.schedule.id==="remote"?(<li className="label job__label">Удаленная работа</li>):''}
                    </ul>
                </div><span className="job__date date">{calcDate(job.created_at)}</span>
                <div className="job__company-wrapper">
                    <img 
                        className="job__company-logo" 
                        src={job.employer?
                                job.employer.logo_urls?
                                    job.employer.logo_urls[240]:
                                    noImg:
                                noImg}  
                        height="42" 
                        width="42" 
                        alt={job.name + " logo"}/>
                    <div className="job__company-info">
                        <h3 className="job__company-name">{job.employer?job.employer.name:''}</h3>
                        <span className="job__location location">{job.area?job.area.name:''}</span>
                    </div>
                </div>
                <div 
                    className="job__text" 
                    dangerouslySetInnerHTML={
                        {__html: job.branded_description?
                            job.branded_description:
                            job.description?
                                    job.description:
                                    'NO DESCRIPTION'}}>
                </div>
            </div>
        </>        
    )
}

export default ResultView