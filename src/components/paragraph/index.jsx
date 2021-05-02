import React from 'react'
import { ParagraphWrapper } from './styles'

export const Paragraph = ({title, content, isCenter = false, variants = {}}) => {
    return (
        <ParagraphWrapper isCenter={isCenter} variants={variants}>
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