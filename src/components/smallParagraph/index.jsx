import React from 'react'
import { SmallParagraphWrapper } from './styles'

export const SmallParagraph = ({title, content, isCenter = false}) => {

    return (
        <SmallParagraphWrapper isCenter={isCenter}>
            <b>
                {title}
            </b>
            <p>
                {content}
            </p>
        </SmallParagraphWrapper>
    )
}