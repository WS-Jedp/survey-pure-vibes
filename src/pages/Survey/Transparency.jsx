import React, { useContext, useState } from 'react'
import { SurveyWrapper } from './styles'
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { SurveyContext } from '../../context/SurveyContext'

import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SurveyPresentationForm } from '../../containers/surveyPresentation/SurveyPresentationForm'
import { Message } from '../../components/Message'
import { Textarea } from '../../components/forms/Textarea'
import { InputOption } from '../../components/forms/InputOption'
import { InputEmotion } from '../../components/forms/InputEmotion'
import { InputSubPrice } from '../../components/forms/InputSubPrice'
import { InputText } from '../../components/forms/InputText'
import { Button } from '../../components/Button'

import { emotionSubscription, pricesSubscription, vmentor } from '../../tools/responses'

export const Transparency = () => {
    const { setTransparency } = useContext(SurveyContext)
    const { register: rmuch, handleSubmit: hmuch, formState: {errors: emuch} } = useForm()
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const [mentorValue, setMentorValue] = useState('')


    const onSubmitHowMuch = data => {

        setCharity(prev => ({
            ...prev,
            howMuch: data.howMuch
        }))
        push(`${url}/mentor`)
        
    }
    return (
        <LayoutSurvey>
            <Switch>
                <Route path={path} exact>
                    <SurveyPresentation title="Transparency">
                    
                    </SurveyPresentation>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}