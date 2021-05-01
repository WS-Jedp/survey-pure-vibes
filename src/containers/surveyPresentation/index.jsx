import React from 'react'
import { Button } from '../../components/Button'
import { SurveyPresentationWrapper } from './styles'

export const SurveyPresentation = ({title, description, btnText = "Continue", children}) => {

    return (
        <SurveyPresentationWrapper className="survey-presentation">
            <div className="survey-presentation__title">
                <h1>
                    {title}
                </h1>
                {
                    description && (
                        <p>
                            {description}
                        </p>
                    )
                }
            </div>

            <div className="survey-presentation__content">
                {
                    children
                }
            </div>

            <div className="survey-presentation__button">
                <Button title={btnText} />
            </div>
        </SurveyPresentationWrapper>
    )
}