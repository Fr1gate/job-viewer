import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'
import Card from '../Card/Card'
import './Results.scss'

const Results = (props) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const results = Array.from( useSelector(state => state.results));
    const ElementsPerPage = 4;
    const totalPages = Math.ceil(results.length / ElementsPerPage);
    const totalElements = results.length - 1;
    const firstElement = (currentPage - 1) * ElementsPerPage;
    const cards = []

    function paginationEl(num) {
        let isCurrent = num === currentPage;

        if (!num) {
            return <span className="results__dots">...</span>
        }

        return (
            <button 
                className={isCurrent?"results__page results__page_active": "results__page"} 
                onClick={pageClickHandler}
                data-page={num}>
                {num}
            </button>
        )
    }

    function pagination() {
        let result = [];
        const dots = false;

        function addEl(n) {
            result.push(paginationEl(n));
        }

        let leftDots = false;
        let rightDots = false;
        
        for (let i = 1; i <= totalPages; i++) {
            if (i===1 || (i >= currentPage-1 && i <= currentPage+1) || (i === totalPages)) {
                addEl(i)
            }

            if (i > 1 && i < currentPage - 1 && !leftDots) {
                addEl(dots);
                leftDots = true;
            }
            
            if (i < totalPages && i > currentPage + 1 && !rightDots) {
                addEl(dots);
                rightDots = true;
            }      
        }

        return result;
    }

    function changePage(page) {
        if (page > 0 && page <= totalPages)
            dispatch(Actions.setCurrentPage(page))
    }

    function pageClickHandler(e) {
        let page = Number(e.target.dataset.page);
        changePage(page);
    }

    function leftArrowClickHandler(e) {
        changePage(currentPage - 1);
    }

    function rightArrowClickHandler(e) {
        changePage(currentPage + 1);
    }

    

    if (results.length > 0) {
        for (let i = firstElement; i <= totalElements && i < firstElement + ElementsPerPage; i++) {
            let element = results[i];
            if (element)
                cards.push(<Card 
                    name={element.name} 
                    logo={element.employer.logo_urls} 
                    empName={element.employer.name} 
                    date={element.published_at}
                    schedule={element.schedule.id} 
                    area={element.area.name}
                    id={element.id} />);
        }
    }
    
    return(
        <div className="results">
            {cards.map(item => (
                <React.Fragment key={item.id}>
                    {item}
                </React.Fragment>
            ))}
            <nav className="results__pagination">
                <button className="results__page results__page_left " onClick={leftArrowClickHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                    </svg>
                </button>
                {pagination()}
                <button className="results__page results__page_right " onClick={rightArrowClickHandler}>
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