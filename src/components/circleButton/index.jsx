import React from 'react'
import { CircleButtonWrapper } from './styles'

export const CircleButton = ({title, action, selected = false}) => {

    const transition = {
        duration: .5,
        ease: [.6, .01, -0.05, .9]
    }

    return (
        <CircleButtonWrapper selected={selected} onClick={action} type="button" whileHover={{scale: 1.05, transition: transition}}>
            <b>
                {title}
            </b>
        </CircleButtonWrapper>
    )
}