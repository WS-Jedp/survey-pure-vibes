import React from 'react'
import { Button } from '../../components/Button'
import { Paragraph } from '../../components/paragraph'
import { LayoutStage } from '../../layouts/stage'

export const Home = () => {

    return (
        <LayoutStage>
            <Paragraph title="Chaging the world" content="A lot of text" />
            <Button title="Start The Survey"/> 
        </LayoutStage>
    )
}