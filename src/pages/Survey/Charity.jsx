import React, { useContext } from 'react'
import { SurveyWrapper } from './styles'
import { useRouteMatch, useHistory, Switch, Route } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { SurveyContext } from '../../context/SurveyContext'

import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SurveyPresentationForm } from '../../containers/surveyPresentation/SurveyPresentationForm'
import { Message } from '../../components/Message'
import { InputText } from '../../components/forms/InputText'
import { Button } from '../../components/Button'


export const Charity = () => {
    const { charity, setCharity } = useContext(SurveyContext)
    const { register: rname, handleSubmit: hname, formState: {errors: ename} } = useForm()
    const { register: ruser, handleSubmit: huser, formState: { errors: euser  } } = useForm()
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const onSubmitName = data => {
        
    }

    const onSubmitUser = data => {

    }

    return (
        <LayoutSurvey>
            <Switch>
                <Route path={path} exact>
                    <SurveyPresentationForm onSubmit={hname(onSubmitName)} submitBtn title="About Charity">
                    </SurveyPresentationForm>
                </Route>

                <Route path={`${path}/hi`}>
                    <SurveyPresentation title="" action={() => push(`${url}/user`)} >
                        <Message>
                            Hi {user.name}, We are happy to have you!
                        </Message>
                    </SurveyPresentation>
                </Route>

                <Route path={`${path}/user`}>
                    <SurveyPresentationForm submitBtn title="About Charity" onSubmit={huser(onSubmitUser)}>
                        <SurveyWrapper>
                           
                        </SurveyWrapper>
                    </SurveyPresentationForm>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}