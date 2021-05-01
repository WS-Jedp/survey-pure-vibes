import React from 'react'
import { Header } from '../../components/header'
import { LayoutStageWrapper } from './styles'

export const LayoutStage = ({ children }) => {

    return (
        <LayoutStageWrapper>
            <Header isHome />
            <div className="layout-stage-content">
                {
                    children
                }
            </div>
        </LayoutStageWrapper>
    )
}