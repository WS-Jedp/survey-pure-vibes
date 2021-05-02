import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { GoalWrapepr } from './styles'

export const Goal = () => {

    const { push } = useHistory()
    const onBtn = () => push('/ready')

    return (
        <LayoutSurvey>
            <SurveyPresentation title="Our Goal" btnText="Continue" action={onBtn}>
                <GoalWrapepr>
                    <h1>
                        2.5 MILLION KIDS FREED FROM GENERATIONAL POVERTY
                    </h1>
                    <p>
                        Over 500 Million <b>children are living in poverty.</b>  Our goal is to lower that number by .5%.
                    </p>

                    <h4>WHICH ONES?</h4>
                    <p>
                    We target children who live in <b>low to extremely low economic conditions</b> of our world. Specifically those without the resources to engage in foreign language courses.
                    </p>
                </GoalWrapepr>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}