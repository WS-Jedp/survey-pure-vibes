import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SolutionsContent } from './styles'
import { CardSolution } from '../../components/cardSolution'
import { containerVariants, leftToRightVariants } from '../../styles/animations'

const OurSolutions = () => (<>
    We plan to break poverty cycles by <b>INCREASING ENGLISH PROFICIENCY</b> and <b>TEACHING HOLISTIC PRINCIPLES</b> through our guidance and mentorship groups. 
</>)

export const Solutions = () => {

    const { push } = useHistory()

    const onBtn = () => push('/goal')

    return (
        <LayoutSurvey>
            <SurveyPresentation title="Our Solutions" description={<OurSolutions />} btnText="Continue" action={onBtn}>
                <SolutionsContent variants={containerVariants} initial="hidden" animate="visible">
                    <CardSolution 
                        title="Billingual System Project"
                        description="Know More"
                        isCenter
                        goTo="/english-project"
                        variants={leftToRightVariants}
                    />
                    <CardSolution 
                        title="Mambas Youth Mentorship"
                        description="Know More"
                        isCenter
                        goTo="/mentorship-project"
                        variants={leftToRightVariants}
                    />
                </SolutionsContent>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}