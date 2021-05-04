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
import { InputText } from '../../components/forms/InputText'
import { Button } from '../../components/Button'


const vmentor = [{name: "mentor", value: "Yes"}, {name: "mentor", value: "No"}, {name: "mentor", value: "Maybe"}]
const emotionSubscription = [{name: 'subEmotion', title: 'Not Feeling It', value: 1}, {name: 'subEmotion', title: '', value: 2}, {name: 'subEmotion', title: 'Normal', value: 3}, {name: 'subEmotion', title: '', value: 4}, {name: 'subEmotion', title: 'Feeling It', value: 5}]

export const Charity = () => {
    const { charity, setCharity } = useContext(SurveyContext)
    const { register: rmuch, handleSubmit: hmuch, formState: {errors: emuch} } = useForm()
    const { register: rmentor, handleSubmit: hmentor, formState: { errors: ementor  } } = useForm()
    const { register: rsub, handleSubmit: hsub, formState: { errors: esub  } } = useForm()
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const [mentorValue, setMentorValue] = useState('')
    // const [mentorValue, setMentorValue] = useState('')


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
            mentor: mentorValue
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
                            options={vmentor}
                            form={{...rmentor("mentor", {required: true})}}
                            setValue={setMentorValue}
                            error={ementor.mentor}
                        />
                    </SurveyPresentationForm>
                </Route>

                <Route path={`${path}/subscription`}>
                    <SurveyPresentationForm submitBtn title="About Charity" onSubmit={() => {}}>
                        <SurveyWrapper>
                            <InputEmotion 
                                title="How comfortable are you with paying for a subscription that provide children in poor countries hope and opportunities?"
                                options={emotionSubscription}
                                form={{...rsub("subEmotion", {required: true})}}
                                error={esub.mentor}
                            />
                        </SurveyWrapper>
                    </SurveyPresentationForm>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}