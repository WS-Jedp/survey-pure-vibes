import React from 'react'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { CardPrice } from '../../components/cardPrice'
import { InputPrice } from '../../components/inputPrice'
import { CircleButton } from '../../components/circleButton'
import { SmallParagraph } from '../../components/smallParagraph'
import { HappyFace,NeutralFace, SadFace } from '../../components/icons/faces'

export const Charity = () => {

    return (
        <LayoutSurvey>
           <CircleButton title="Yes!" />
           <SmallParagraph title="Hello World" content="World of humans" isCenter />
        </LayoutSurvey>
    )
}