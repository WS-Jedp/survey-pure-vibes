import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './routes'
import { SurveyProvider } from './context/SurveyContext'
import { FeaturesProvider } from './context/FeaturesContext'
import { GlobalStyles } from './styles'

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