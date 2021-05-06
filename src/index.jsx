import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './routes'
import { SurveyProvider } from './context/SurveyContext'
import { FeaturesProvider } from './context/FeaturesContext'
import { GlobalStyles } from './styles'
import firebase from 'firebase'

const { API_KEY, AUTH_DOMAIN, PROJECT_ID, APP_ID } = process.env

firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    appId: APP_ID
  })

ReactDOM.render((    
    <SurveyProvider>
        <FeaturesProvider>
            <GlobalStyles />
            <Router>
                <App />
            </Router>
        </FeaturesProvider>
    </SurveyProvider>
), window.document.getElementById('app'))