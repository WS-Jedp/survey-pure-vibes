import React from 'react'
import { Header } from '../../components/header'
import { LayoutSurveyWrapper } from './styles'

export const LayoutSurvey = ({children}) => {

    return (
        <LayoutSurveyWrapper>
            <Header />
            {
                children
            }
        </LayoutSurveyWrapper>
    )
} 