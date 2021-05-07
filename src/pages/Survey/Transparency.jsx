import React, { useContext, useState } from 'react'
import { SurveyTransparency, SurveyTransparencyParagraphs } from './styles'
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { SurveyContext } from '../../context/SurveyContext'

import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SmallParagraph } from '../../components/smallParagraph'
import { SurveyPresentationForm } from '../../containers/surveyPresentation/SurveyPresentationForm'
import { InputOption } from '../../components/forms/InputOption'

import { transparency as transparencyOptions } from '../../tools/responses'

export const Transparency = () => {
    const { setTransparency, transparency } = useContext(SurveyContext)
    const { register: rfair, handleSubmit: hfair, formState: {errors: efair} } = useForm()
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const [isFair, setIsFair] = useState('')


    const onSubmitTransparency = data => {
        setTransparency(isFair)
        push("/saving")
    }

    return (
        <LayoutSurvey>
            <Switch>
                <Route path={path} exact>
                    <SurveyPresentation title="Transparency" action={() => push(`${url}/fair`)}>
                        <SurveyTransparency>
                            <p>
                                Our <b>Social Enterprise business structure</b> allows us to have a <b>dedicated income,</b> so we won’t have to rely on funding or outside investments. 
                            </p>
                            <SurveyTransparencyParagraphs>
                                <SmallParagraph 
                                    title="50%"
                                    content="The Help Chain Fund"
                                    isCenter
                                />
                                <SmallParagraph 
                                    title="17.5%"
                                    content="Marketing, digital support, and expenses"
                                    isCenter
                                />
                                <SmallParagraph 
                                    title="37.5%"
                                    content="netted by Pure Vibes Global"
                                    isCenter
                                />
                            </SurveyTransparencyParagraphs>
                            <p>
                                <b>This helps us to spread our message further,</b> employ more staff, and <b>MOST IMPORTANTLY</b> continue to transform the lives of young people.  
                            </p>
                        </SurveyTransparency>
                    </SurveyPresentation>
                </Route>

                <Route path={`${path}/fair`}>
                    <SurveyPresentationForm 
                        submitBtn 
                        title="Transparency" 
                        onSubmit={hfair(onSubmitTransparency)} 
                    >
                        <InputOption 
                            title="Does this percentage breakdown from the previous screen seem fair? "
                            options={transparencyOptions}
                            form={{...rfair("fair", { required: true })}}
                            setValue={setIsFair}
                            error={efair.fair}
                            defaultValue={transparency}
                        />
                    </SurveyPresentationForm>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}