import React from 'react'
import { CardParagraphWrapper } from './styles'

export const CardParagraph = ({title, content}) => {

    return (
        <CardParagraphWrapper>
            <h3>
                {
                    title
                }
            </h3>
            <p>
                {
                    content
                }
            </p>
        </CardParagraphWrapper>
    )
}