import React from 'react'
import { CardParagraphWrapper } from './styles'

export const CardParagraph = ({title, content, variants = {}}) => {

    return (
        <CardParagraphWrapper variants={variants}>
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