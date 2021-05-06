import React from 'react'
import { ButtonWrapper } from './styles'

const transition = {
    duration: .5,
    ease: [.6, .01, -0.05, .9]
}

const animate = {
    scale: 1.1,
    boxShadow: '0, 0, 9px 1px rgba(0,0,0,.1)'
}

export const Button = ({title, action, variants = {}, disabled = false}) => {

    return (
        <ButtonWrapper disabled={disabled} variants={variants} onClick={action && action} whileHover={{scale: 1.05, transition: transition}} >
            { title }
        </ButtonWrapper>
    )
}