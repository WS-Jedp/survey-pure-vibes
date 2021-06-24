import React from 'react'
import { FeatureParagraphWrapper } from './styles'

export const FeatureParagraph = ({content, title}) => (
    <FeatureParagraphWrapper>
        <h1>
            {title}
        </h1>
        <p>
            {
                content
            }
        </p>
    </FeatureParagraphWrapper>
)