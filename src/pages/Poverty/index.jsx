import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { PovertyContentWrapper } from './styles'

import { CardParagraph } from '../../components/cardParagraph'

const WhatIsPoverty = () => (
    <>
        Cycles of <b>living in impoverished</b> circumstances which <b>carry across generations.</b> They are often unable to be broken without <b>outside intervention.</b> 
    </>
)
const HowToBreakthem = () => (
    <>
        That is where <b>YOU</b> come in as a Help Chain Member! <b>YOU ARE</b> THE OUTSIDE INTERVENTION- <b>YOU</b> become the CHANGE! 
        And..
        Together <b>WE CAN</b> be the catalyst for enormous change and profound healing within so many families. 
    </>
)

export const Poverty = () => {
    const { push } = useHistory()    
    const onBtn = () => push('/solutions')
    return (
        <LayoutSurvey>
            <SurveyPresentation title="What Are Poverty Cycles?" btnText="Continue" action={onBtn}>
                <PovertyContentWrapper>
                    <CardParagraph 
                        title="Well, They Are.."
                        content={<WhatIsPoverty />}
                    />
                    <CardParagraph 
                        title="How To Break Them?"
                        content={<HowToBreakthem />}
                    />
                </PovertyContentWrapper>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}