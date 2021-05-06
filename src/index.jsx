import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './routes'
import { SurveyProvider } from './context/SurveyContext'
import { FeaturesProvider } from './context/FeaturesContext'
import { GlobalStyles } from './styles'
import i18n from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { global_en } from './translations/en/global'


i18n.init({
    interpolation: { escapeValue: true },
    lng: 'en',
    resources: {
        en: {
            global: global_en
        }
    }
})

ReactDOM.render((    
    <SurveyProvider>
        <FeaturesProvider>
            <I18nextProvider i18n={i18n}>
                <GlobalStyles />
                <Router>
                    <App />
                </Router>
            </I18nextProvider>
        </FeaturesProvider>
    </SurveyProvider>
), window.document.getElementById('app'))