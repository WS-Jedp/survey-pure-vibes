import React from 'react'
import { CardPriceWrapper } from './styles'

export const CardPrice = ({value, description, isSelected = false}) => {

    return (
        <CardPriceWrapper isSelected={isSelected}>
            <b>
                {value}
            </b>
            <small>
                {description}
            </small>
        </CardPriceWrapper>
    )
}