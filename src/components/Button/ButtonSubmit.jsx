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

export const ButtonSubmit = ({title, variants = {}}) => {

    return (
        <ButtonWrapper type="submit" variants={variants} whileHover={{scale: 1.05, transition: transition}} >
            { title }
        </ButtonWrapper>
    )
}