import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SolutionContentWrapper } from './styles'

import { Paragraph } from '../../components/paragraph'

const ProblemText = () => (<>
Children in developing/emerging countries are consistently not receiving proper English education, leading to poor English development.<br />
This lack of proficiency keeps them submerged in <b>the poverty cycle.</b>
</>)

const SolutionText = () => (<>
    We will teach <b>English</b> to children <b>for free!</b> <br />
    These kids do not have access to proper English classes. <b>Our Bilingual System</b> will ensure them <b>access to opportunities</b> later in life.
</>)

export const SolutionEnglish = () => {
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
                    <iframe src="https://www.youtube.com/embed/PHYu4vqZK24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </SolutionContentWrapper>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}