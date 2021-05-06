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


export const Manners = () => {

    const { user, setUser } = useContext(SurveyContext)

    const { register: rname, handleSubmit: hname, formState: {errors: ename} } = useForm()
    const { register: ruser, handleSubmit: huser, formState: { errors: euser  } } = useForm()
    const { push } = useHistory()
    const { url, path } = useRouteMatch()

    const onSubmitName = data => {
        setUser(prev => ({
            ...prev,
            name: data.fname
        }))
        push(`${url}/hi`)
    }

    const onSubmitUser = data => {
        setUser(prev => ({
            ...prev,
            email: data.email,
            birthdate: data.birth
        }))
        push(`/charity`)
    }

    return (
        <LayoutSurvey>
            <Switch>
                <Route path={path} exact>
                    <SurveyPresentationForm onSubmit={hname(onSubmitName)} submitBtn title="Manners First">
                            <InputText 
                                title="What is your first name?" 
                                placeholder="Write your name" 
                                error={ename.fname} 
                                form={{...rname("fname", {required: true})}}
                                defaultValue={user.name}
                            />
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
                    <SurveyPresentationForm submitBtn title="Please Provide" onSubmit={huser(onSubmitUser)}>
                        <SurveyWrapper>
                            <InputText 
                                title="What is your email?" 
                                placeholder="Write your email" 
                                type="email" 
                                form={{...ruser('email', { required: true })}}
                                defaultValue={user.email}
                            />
                            <h3>&</h3>
                            <InputText 
                                title="When is your birthdate?" 
                                placeholder="dd/mm/yyyy" 
                                type="date" 
                                form={{...ruser('birth', { required: true })}}
                                defaultValue={user.birthdate}
                            />
                        </SurveyWrapper>
                    </SurveyPresentationForm>
                </Route>
            </Switch>
        </LayoutSurvey>
    )
}