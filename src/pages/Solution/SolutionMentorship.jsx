import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SolutionContentWrapper } from './styles'

import { Paragraph } from '../../components/paragraph'

const ProblemText = () => (<>
Millions of children around the world are <b>AT-RISK.</b> This means they are less likely to successfully <b>transition</b> into adulthood. 
<br />
The <b>transition</b> can pertain to academic success, career readiness, financial independence, and the ability to avoid a life of crime.
</>)

const SolutionText = () => (<>
    Establish a <b>youth basketball team</b> within the Colombian Inder League! 
    <br />
    Playing basketball provides an outlet and support system for children suffering from poverty. We work with youth living in neighborhoods that struggle with drugs, sex trafficking, and violence. 
    <br />
    <b>
    Our aim is to provide a safe space where kids can develop holistic life skills, in the hopes of changing the trajectories of their lives.
    </b>
</>)

export const SolutionMetorship = () => {
    const { push } = useHistory()
    const onBtn = () => push('/solutions')
    return (
        <LayoutSurvey>
            <SurveyPresentation title="Billingual System Project" btnText="Our Solutions" action={onBtn}>
                <SolutionContentWrapper>
                    <Paragraph 
                        title="The Problem"
                        content={<ProblemText />}
                    />
                    <Paragraph 
                        title="Our Solution"
                        content={<SolutionText />}
                    />
                    <iframe src="https://www.youtube.com/embed/8rsAYiLB7Dk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </SolutionContentWrapper>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}