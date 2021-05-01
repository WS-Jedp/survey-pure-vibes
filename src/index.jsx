import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes'
import { SurveyProvider } from './context/SurveyContext'
import { GlobalStyles } from './styles'

ReactDOM.render((
    
    <SurveyProvider>
        <GlobalStyles />
        <App />
    </SurveyProvider>
), window.document.getElementById('app'))