import React from 'react'
import { LayoutStage } from '../../layouts/stage'

import { Button } from '../../components/Button'
import { Paragraph } from '../../components/paragraph'
import { CardParagraph } from '../../components/cardParagraph'
import { CardSolution } from '../../components/cardSolution'



export const Home = () => {

    return (
        <LayoutStage>
            <Paragraph title="Chaging the world" content="A lot of text" />
            <CardParagraph title="Hello world" content="Another big long text as fuck" />
            <CardSolution  title="Solution project" goTo="solution" />
            <Button title="Start The Survey"/> 
            
            
        </LayoutStage>
    )
}