import React from 'react'
import { Link } from 'react-router-dom'
import { CardSolutionWrapper } from './styles'


const hover = {
    scale: 1.03,
    boxShadow: "0 0 9px 1px rgba(0,0,0,.3)"
} 

export const CardSolution = ({title, description = 'Know More', isCenter = false, goTo, isComplete = false, variants={}}) => {

    return (
        <Link to={goTo} >
            <CardSolutionWrapper isCenter={isCenter} whileHover={hover} isComplete={isComplete} variants={variants}>
                <h3>
                    {title}
                </h3>
                <small>
                    { description }
                </small>
            </CardSolutionWrapper>
        </Link>
    )
} 