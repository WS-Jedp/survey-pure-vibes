import React, { useState, createContext } from 'react'


const initialState = {} 

export const SurveyContext = createContext(initialState)

export const SurveyProvider = ({children}) => {
    
    const [user, setUser] = useState({})
    const [charity, setCharity] = useState({})
    
    const state = {
        user,
        setUser,
        charity,
        setCharity
    }
    return (
        <SurveyContext.Provider value={state}> {children} </SurveyContext.Provider>
    )
}