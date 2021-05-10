import React, { useContext, useEffect, useState } from 'react'
import { SurveyWrapper, SurveyParagraphsRow } from './styles'
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { SurveyContext } from '../../context/SurveyContext'
import { FeaturesContext } from '../../context/FeaturesContext'

import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { Paragraph } from '../../components/paragraph'
import { FeatureParagraph } from '../../components/featureParagraph'
import { SurveyPresentationForm } from '../../containers/surveyPresentation/SurveyPresentationForm'
import { FeaturesMembership } from '../../containers/featuresMembership'
import { Message } from '../../components/Message'

import { InputOption } from '../../components/forms/InputOption'
import { Textarea } from '../../components/forms/Textarea'

import { favoriteFeatures } from '../../tools/responses'


import { TexMembershiptWhy, TextCreativeCreatures, TextImpactIntiator, TextMembershipAdvantages, TextMembershipVision, TextTravelTripsters } from '../../tools/texts'

export const Subscription = () => {
    
    const { user, setFavoriteFeature, favoriteFeature } = useContext(SurveyContext)
    const { allVisited } = useContext(FeaturesContext)
    
    const [ showMsgFeatures, setShowMsgFeatures ] = useState(false)

    useEffect(() => {
        setShowMsgFeatures(false)
    }, [])

    const [fav, setFav] = useState({})

    const submitFav = data => {
        setFavoriteFeature(prev => ({
            ...prev,
            name: fav,
            why: data.why
        }))
        push(`${url}/how-it-works`)
    }

    const onContinue = () => {

        if(!allVisited) {
            return setShowMsgFeatures(true)
        }

        push(`${path}/favorite`)

    }


    const { register: rfav, handleSubmit: hfav, formState: {errors: efav} } = useForm()
    
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    return (
        <LayoutSurvey>
            <Switch>
                <Route path={path} exact>
                    <SurveyPresentation title="About Membership Features" action={() => push(`${url}/features`)}>
                        <SurveyParagraphsRow>
                            <Paragraph 
                                title="Advantages"
                                content={<TextMembershipAdvantages />}
                            />
                            <Paragraph 
                                title="Why?"
                                content={<TexMembershiptWhy />}
                            />
                            <Paragraph 
                                title="Vision"
                                content={<TextMembershipVision />}
                            />
                        </SurveyParagraphsRow>
                    </SurveyPresentation>
                </Route>

                <Route path={`${path}/features`}>
                    <SurveyPresentation 
                        title="Membership Features"
                        disabled={!allVisited}
                        action={() => onContinue()}
                    >
                        <FeaturesMembership  msgCompleteFeatures={showMsgFeatures} />
                    </SurveyPresentation>
                </Route>

                {/* --------------- FAVORITE --------------- */}
                <Route path={`${path}/favorite`}>
                    <SurveyPresentationForm 
                        submitBtn
                        title="About Membership Features"
                        onSubmit={hfav(submitFav)}
                    >
                        <SurveyWrapper>
                            <InputOption 
                                title="What Feature Service do you like the most and why?"
                                form={{...rfav("fav", { required: true })}}
                                error={efav.fav}
                                setValue={setFav}
                                options={favoriteFeatures}
                                defaultValue={favoriteFeature.name}
                            />
                            <Textarea 
                                title="Why do you like the most this service?"
                                placeholder="Write your opinion"
                                form={{...rfav("why", {required: true})}}
                                error={efav.why}
                                defaultValue={favoriteFeature.why}
                            />
                        </SurveyWrapper>
                    </SurveyPresentationForm>
                </Route>

                <Route path={`${path}/how-it-works`}>
                    <SurveyPresentation
                        title=""
                        action={() => push('/transparency')}
                        btnText="Go!"
                    >
                        <Message>
                            Perfect {user.name}! Lastly, let us show you how we plan to allocate Subscription funds.  
                        </Message>
                    </SurveyPresentation>
                </Route>

                {/* --------------- FEATURES --------------- */}
                <Route path={`${path}/impact-initiator`}>
                    <SurveyPresentation 
                        title="" 
                        action={() => push("/impact-initiator")}
                    >
                        <FeatureParagraph 
                            title="Impact Initiator"
                            content={<TextImpactIntiator />}
                        />
                    </SurveyPresentation>
                </Route>

                <Route path={`${path}/creative-creatures`}>
                    <SurveyPresentation 
                        action={() => push("/creative-creatures")}
                    >
                        <FeatureParagraph 
                            title="Creative Creatures"
                            content={<TextCreativeCreatures />}
                        />
                    </SurveyPresentation>
                </Route>

                <Route path={`${path}/travel-tripsters`}>
                    <SurveyPresentation 
                        action={() => push("/travel-tripsters")}
                    >
                        <FeatureParagraph 
                            title="Travel Tripsters"
                            content={<TextTravelTripsters />}
                        />
                    </SurveyPresentation>
                </Route>
                
            </Switch>
        </LayoutSurvey>
    )
}