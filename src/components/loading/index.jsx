import React from 'react'
import { LoadingWrapper } from './styles'

export const Loading = ({message = "Loading"}) => {

    return (
        <LoadingWrapper>
            <div className="loading"></div>
            <small>
                {
                    message
                }
            </small>
        </LoadingWrapper>
    )
}