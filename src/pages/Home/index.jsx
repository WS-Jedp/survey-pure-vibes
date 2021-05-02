import React from 'react'
import { HomeWrapper, IntroductionWrapper } from './styles'
import { LayoutStage } from '../../layouts/stage'
import { useTranslation } from 'react-i18next'

import { Button } from '../../components/Button'
import { Paragraph } from '../../components/paragraph'
import { CardParagraph } from '../../components/cardParagraph'
import { CardSolution } from '../../components/cardSolution'



export const Home = () => {

    const [t, i18n] = useTranslation('global')

    return (
        <LayoutStage>
            <HomeWrapper>
                <IntroductionWrapper>
                    <h1>
                        {t("home.title")}
                    </h1>
                    <p>
                        {t("home.community")}
                    </p>
                </IntroductionWrapper>
            </HomeWrapper>
        </LayoutStage>
    )
}