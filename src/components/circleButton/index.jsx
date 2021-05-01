import React from 'react'
import { CircleButtonWrapper } from './styles'

export const CircleButton = ({title, action}) => {

    return (
        <CircleButtonWrapper onClick={action}>
            <b>
                {title}
            </b>
        </CircleButtonWrapper>
    )
}