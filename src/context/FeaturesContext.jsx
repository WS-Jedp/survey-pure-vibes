import React, { useState, useEffect, createContext } from 'react'

export const FeaturesContext = createContext({})

export const FeaturesProvider = ({children}) => {

    const [impactInitiator, setImpactInitiator] = useState(false)
    const [creativeCreatures, setCreativeCreatures] = useState(false)
    const [travelTripsters, setTravelTripster] = useState(false)
    const [allVisited, setAllVisited] = useState(false)

    const initialValue = {
        isVisitedII: impactInitiator,
        setIsVisitedII: setImpactInitiator,
        isVisitedCC: creativeCreatures,
        setIsVisitedCC: setCreativeCreatures,
        isVisitedTT: travelTripsters,
        setIsVisitedTT: setTravelTripster,
        allVisited
    }

    useEffect(() => {
        if(impactInitiator && creativeCreatures && travelTripsters) {
            setAllVisited(true)
        }
    }, [impactInitiator, creativeCreatures, travelTripsters, allVisited])


    return (
        <FeaturesContext.Provider value={initialValue}>
            {children}
        </FeaturesContext.Provider>
    )
}