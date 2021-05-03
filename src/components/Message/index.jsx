import React from 'react'
import { MessageWrapper } from './styles'

export const Message = ({children}) => {

    return (
        <MessageWrapper>
            {children}
        </MessageWrapper>
    )
} 