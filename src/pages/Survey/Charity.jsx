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

import { emotionSubscription, pricesSubscription, vmentor } from '../../tools/responses'

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
        push(`${url}/next-step`)
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
                            defaultValue={charity.howMuch}
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
                            defaultValue={charity.mentor}
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
                                defaultValue={charity.subscription.emotion ? charity.subscription.emotion : ""}
                            />
                            <InputSubPrice 
                                title="How much would you pay monthly?"
                                options={pricesSubscription}
                                setValue={setPriceValue}
                                form={{...rsub("subPrice", {required: true})}}
                                error={esub.subPrice}
                                defaultValue={charity.subscription.price}
                            />
                        </SurveyWrapper>
                    </SurveyPresentationForm>
                </Route>
                <Route path={`${path}/next-step`}>
                    <SurveyPresentation title="" action={() => push('/subscription')} >
                        <Message>
                            Now let’s talk about what you would want your subscription to look like?
                        </Message>
                    </SurveyPresentation>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}