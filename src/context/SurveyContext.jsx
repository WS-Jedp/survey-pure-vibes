import React, { useState, createContext } from 'react'


const initialState = {} 

export const SurveyContext = createContext(initialState)

export const SurveyProvider = ({children}) => {
    
    const [user, setUser] = useState({name: 'friend'})
    const [charity, setCharity] = useState({})
    const [impactInitiator, setImpactInitiator] = useState({})
    const [creativeCreatures, setCreativeCreatures] = useState({})
    const [travelTripsters, setTravelTripsters] = useState({})
    const [favoriteFeature, setFavoriteFeature] = useState({})
    const [transparency, setTransparency] = useState('')
    
    const state = {
        user,
        setUser,
        charity,
        setCharity,
        impactInitiator, 
        setImpactInitiator,
        creativeCreatures,
        setCreativeCreatures,
        travelTripsters,
        setTravelTripsters,
        favoriteFeature,
        setFavoriteFeature,
        transparency,
        setTransparency
    }
    return (
        <SurveyContext.Provider value={state}> {children} </SurveyContext.Provider>
    )
}