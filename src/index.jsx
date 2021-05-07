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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
        }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
        });
    });
}