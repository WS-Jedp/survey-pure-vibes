import React from 'react'
import { Link } from 'react-router-dom'
import { CardSolutionWrapper } from './styles'

export const CardSolution = ({title, description = 'Know More', isCenter = false, goTo, isComplete = false}) => {

    return (
        <Link to={goTo} >
            <CardSolutionWrapper isCenter={isCenter} isComplete={isComplete}>
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