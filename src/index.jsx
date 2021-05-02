import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes'
import { SurveyProvider } from './context/SurveyContext'
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
        <I18nextProvider i18n={i18n}>
            <GlobalStyles />
            <App />
        </I18nextProvider>
    </SurveyProvider>
), window.document.getElementById('app'))