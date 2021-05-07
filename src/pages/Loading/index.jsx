import React, { useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { LoadingWrapper } from './styles'

import { SurveyContext } from '../../context/SurveyContext'
import { LayoutSurvey } from '../../layouts/survey'
import { Loading } from '../../components/loading'

import { addSurvey } from '../../db'

export const LoadingPage = ({ message = "Saving Your Answers 😃" }) => {

    const { push } = useHistory()
    const { user, charity, favoriteFeature, transparency, impactInitiator, creativeCreatures, travelTripsters } = useContext(SurveyContext) 
    const data = {user, charity, favoriteFeature, transparency, impactInitiator, creativeCreatures, travelTripsters}
    useEffect(() => {

        const postData = async () => {
            await addSurvey(data)
            push('/thanks')
        }
        postData()
    }, [])

    return (
        <LayoutSurvey>
            <LoadingWrapper>
                <Loading 
                    message={message}
                />
            </LoadingWrapper>
        </LayoutSurvey>
    )
}