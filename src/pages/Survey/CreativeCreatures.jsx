import React, { useContext, useState } from 'react'
import { SurveyWrapper, SurveyParagraphsRow } from './styles'
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { SurveyContext } from '../../context/SurveyContext'
import { FeaturesContext } from '../../context/FeaturesContext'

import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { InputEmotion } from '../../components/forms/InputEmotion'
import { InputSubPrice } from '../../components/forms/InputSubPrice'

import { emotionSubscription, probability, pricesFeature } from '../../tools/responses'


export const CreativeCreatures = () => {

    const [feeling, setFeeling] = useState(0)
    const [prob, setProb] = useState(0)
    const [price, setPrice] = useState(0)

    const { setCreativeCreatures } = useContext(SurveyContext)
    const { setIsVisitedCC } = useContext(FeaturesContext)

    const { register: rfeel, handleSubmit: hfeel, formState: {errors: efeel} } = useForm()
    const { register: rprob, handleSubmit: hprob, formState: { errors: eprob  } } = useForm()
    const { register: rprice, handleSubmit: hprice, formState: { errors: eprice  } } = useForm()

    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const submitFeel = data => {
        setCreativeCreatures(prev => ({
            ...prev,
            feeling
        }))
        push(`${url}/probability`)
    }

    const submitProb = data => {
        setCreativeCreatures(prev => ({
            ...prev,
            probability: prob
        }))
        push(`${url}/price`)
    }

    const submitPrice = data => {
        setCreativeCreatures(prev => ({
            ...prev,
            price
        }))
        setIsVisitedCC(true)
        push('/subscription/features')
    }


    return (
        <LayoutSurvey>
            <Switch>
                <Route path={path} exact>
                    <SurveyPresentation 
                        title="Creative Creatures" 
                        action={hfeel(submitFeel)}
                    >
                        <InputEmotion 
                            title="How do you feel about Creative Creatures Feature option?"
                            options={emotionSubscription}
                            form={ {...rfeel("feeling", { required: true })} }
                            setValue={setFeeling}
                            error={efeel.feeling}
                        />
                    </SurveyPresentation>
                </Route>

                <Route path={`${path}/probability`}>
                    <SurveyPresentation 
                        title="Creative Creatures" 
                        action={hprob(submitProb)}
                    >
                        <InputEmotion 
                            title="Likelihood of using this feature?"
                            options={probability}
                            form={ {...rprob("probability", { required: true })} }
                            setValue={setProb}
                            error={eprob.probability}
                        />
                    </SurveyPresentation>
                </Route>

                <Route path={`${path}/price`}>
                    <SurveyPresentation 
                        title="Creative Creatures" 
                        action={hprice(submitPrice)}
                    >
                        <InputSubPrice 
                            title="How much would you pay monthly for the subscription + The Creative Creatures Service?"
                            options={pricesFeature}
                            form={{...rprice("price", {required: true})}}
                            error={eprice.price}
                            setValue={setPrice}
                        />
                    </SurveyPresentation>
                </Route>         
            </Switch>
        </LayoutSurvey>
    )
}