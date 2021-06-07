import { connect, useSelector, useDispatch } from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'
import Card from '../Card/Card'

const Results = (props) => {
    const dispatch = useDispatch();
    
    const page = useSelector(state => state.currentPage)
    const results = useSelector(state => state.results)
    const cards = []
    
    results.forEach(element => {
        cards.push(<Card 
            name={element.name} 
            logo={element.employer.logo_urls} 
            empName={element.employer.name} 
            date={element.published_at}
            schedule={element.schedule.id} 
            area={element.area.name} />)
    });
    
    return(
        <div className="results">
            {cards}
            <nav className="results__pagination">
                <button className="results__page results__page_left">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                    </svg>
                </button>
                <button className="results__page">1</button>
                <button className="results__page results__page_active">2</button>
                <button className="results__page">3</button>
                <span className="results__dots">...</span>
                <button className="results__page">10</button>
                <button className="results__page results__page_right">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                    </svg>
                </button>
            </nav>
        </div>
    )
}

export default Results