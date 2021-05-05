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


const vmentor = [{name: "mentor", value: "Yes"}, {name: "mentor", value: "No"}, {name: "mentor", value: "Maybe"}]

const emotionSubscription = [{name: 'subEmotion', title: 'Not Feeling It', value: 1}, {name: 'subEmotion', title: '', value: 2}, {name: 'subEmotion', title: 'Normal', value: 3}, {name: 'subEmotion', title: '', value: 4}, {name: 'subEmotion', title: 'Feeling It', value: 5}]

const pricesSubscription = [{value: "7.95$", description: "26 Cents per day"}, {value: "9.99$", description: "33 Cents per day"}, {value: "12.95$", description: "43 Cents per day"}]

export const Charity = () => {
    const { charity, setCharity } = useContext(SurveyContext)
    const { register: rmuch, handleSubmit: hmuch, formState: {errors: emuch} } = useForm()
    const { register: rmentor, handleSubmit: hmentor, formState: { errors: ementor  } } = useForm()
    const { register: rsub, handleSubmit: hsub, formState: { errors: esub  } } = useForm()
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const [mentorValue, setMentorValue] = useState('')
    const [emotionValue, setEmotionValue] = useState(0)
    const [priceValue, setPriceValue] = useState('')


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

    const onSubmitSub = data => {
        setCharity(prev => ({
            ...prev,
            subscription: {
                emotion: emotionValue,
                price: priceValue
            },
        }))
        console.log(charity)
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
                    <SurveyPresentationForm submitBtn title="About Charity" onSubmit={hsub(onSubmitSub)}>
                        <SurveyWrapper>
                            <InputEmotion 
                                title="How comfortable are you with paying for a subscription that provide children in poor countries hope and opportunities?"
                                options={emotionSubscription}
                                form={{...rsub("subEmotion", {required: true})}}
                                setValue={setEmotionValue}
                                error={esub.subEmotion}
                            />
                            <InputSubPrice 
                                title="How much would you pay monthly?"
                                options={pricesSubscription}
                                setValue={setPriceValue}
                                form={{...rsub("subPrice", {required: true})}}
                                error={esub.subPrice}
                            />
                        </SurveyWrapper>
                    </SurveyPresentationForm>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}