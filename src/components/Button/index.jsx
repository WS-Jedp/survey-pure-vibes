import React from 'react'
import { ButtonWrapper } from './styles'

export const Button = ({title, action}) => {

    return (
        <ButtonWrapper onClick={action}>
            { title }
        </ButtonWrapper>
    )
}