import React from 'react'
import { LoadingWrapper } from './styles'

export const Loading = () => {

    return (
        <LoadingWrapper>
            <div className="loading"></div>
            <small>
                Loading
            </small>
        </LoadingWrapper>
    )
}