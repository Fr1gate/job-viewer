import { connect, useSelector, useDispatch } from 'react-redux'
import React from 'react'
import Actions from '../../Redux/Actions'

const ResultView = (props) => {
    const dispatch = useDispatch();
    
    const page = useSelector(state => state.currentPage)

    
    return(
        <>
            <h1>RESULT VIEW</h1>
        </>
    )
}

export default ResultView