import React from 'react'
import { ParagraphWrapper } from './styles'

export const Paragraph = ({title, content, isCenter = false}) => {
    return (
        <ParagraphWrapper isCenter={isCenter}>
            <h3>
                { title }
            </h3>
            <p>
                {
                    content
                }
            </p>
        </ParagraphWrapper>
    )
}