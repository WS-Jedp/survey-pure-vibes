import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SolutionsContent } from './styles'
import { CardSolution } from '../../components/cardSolution'

const OurSolutions = () => (<>
    We plan to break poverty cycles by <b>INCREASING ENGLISH PROFICIENCY</b> and <b>TEACHING HOLISTIC PRINCIPLES</b> through our guidance and mentorship groups. 
</>)

export const Solutions = () => {

    const { push } = useHistory()

    const onBtn = () => push('/goal')

    return (
        <LayoutSurvey>
            <SurveyPresentation title="Our Solutions" description={<OurSolutions />} btnText="Continue" action={onBtn}>
                <SolutionsContent>
                    <CardSolution 
                        title="Billingual System Project"
                        description="Know More"
                        isCenter
                        goTo="/english-project"
                    />
                    <CardSolution 
                        title="Mambas Youth Mentorship"
                        description="Know More"
                        isCenter
                        goTo="/mentorship-project"
                    />
                </SolutionsContent>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}