import React, { useContext } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { FeatureMembershipWrapper, FeatureContainerWrapper } from './styles'
import { CardSolution } from '../../components/cardSolution'

import { FeaturesProvider, FeaturesContext } from '../../context/FeaturesContext'

export const FeaturesMembership = ({ msgCompleteFeatures }) => {

    const { url } = useRouteMatch()
    
    const {  isVisitedII, isVisitedCC, isVisitedTT } = useContext(FeaturesContext)

    return (
        <FeaturesProvider>
            <FeatureContainerWrapper>
                <h1>
                    Membership Features
                </h1>
                <p>
                    Select one of the membership features to discover more about the benefits
                </p>
                <FeatureMembershipWrapper>
                    <CardSolution 
                        title="The Impact Initiator"
                        description="Know More"
                        goTo="/subscription/impact-initiator"
                        isComplete={isVisitedII}
                        sm
                    />

                    <CardSolution 
                        title="Creative Creatures"
                        description="Know More"
                        goTo="/subscription/creative-creatures"
                        isComplete={isVisitedCC}
                        sm
                    />

                    <CardSolution 
                        title="Travel Tripsters"
                        description="Know More"
                        goTo="/subscription/travel-tripsters"
                        isComplete={isVisitedTT}
                        sm
                    />
                </FeatureMembershipWrapper>

                {
                    msgCompleteFeatures && (
                        <small className="msg-complete">
                            Complete all the features' questions to continue 
                        </small>
                    )
                }
            </FeatureContainerWrapper>
        </FeaturesProvider>
    )
}