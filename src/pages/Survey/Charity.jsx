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
import { InputText } from '../../components/forms/InputText'
import { Button } from '../../components/Button'


export const Charity = () => {
    const { charity, setCharity } = useContext(SurveyContext)
    const { register: rmuch, handleSubmit: hmuch, formState: {errors: emuch} } = useForm()
    const { register: rmentor, handleSubmit: hmentor, formState: { errors: ementor  } } = useForm()
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const [vmentor, setvMentor] = useState('')

    const onSubmitHowMuch = data => {

        setCharity(prev => ({
            ...prev,
            howMuch: data.howMuch
        }))
        push(`${url}/mentor`)
        
    }

    const onSubmitMentor = data => {

        setCharity(prev => ({
            ...prev,
            mentor: vmentor
        }))
        push(`${url}/subscription`)
    }

    return (
        <LayoutSurvey>
            <Switch>
                <Route path={path} exact>
                    <SurveyPresentationForm onSubmit={hmuch(onSubmitHowMuch)} submitBtn title="About Charity" btnText="Next Question">
                        <Textarea 
                            title="How much do you give to charity/causes you care about every year?"
                            placeholder="Write your answer"
                            form={{ ...rmuch("howMuch", {required: true}) }}
                            error={emuch.howMuch}
                        />
                    </SurveyPresentationForm>
                </Route>

                <Route path={`${path}/mentor`}>
                    <SurveyPresentationForm 
                        title="About Charity" 
                        submitBtn
                        onSubmit={hmentor(onSubmitMentor)}
                        btnText="Next Question"
                    >
                        <InputOption 
                            title="Would you like the opportunity to become a virtual Mentor?"
                            options={[{name: "mentor", value: "Yes"}, {name: "mentor", value: "No"}, {name: "mentor", value: "Maybe"}]}
                            setValue={setvMentor}
                            form={{...rmentor("mentor", {required: true})}}
                            error={ementor.mentor}
                        />
                    </SurveyPresentationForm>
                </Route>

                <Route path={`${path}/subscription`}>
                    <SurveyPresentationForm submitBtn title="About Charity" onSubmit={() => {}}>
                        <SurveyWrapper>
                           
                        </SurveyWrapper>
                    </SurveyPresentationForm>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}