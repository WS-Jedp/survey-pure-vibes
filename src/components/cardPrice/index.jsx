import React from 'react'
import { CardPriceWrapper } from './styles'

export const CardPrice = ({value, description, isSelected = false, action}) => {

    const transition = {
        duration: .5,
        ease: [.6, .01, -0.05, .9]
    }

    return (
        <CardPriceWrapper isSelected={isSelected} whileHover={{scale: 1.05, transition: transition}} onClick={action}>
            <b className="card-price__title">
                {value}
            </b>
            <small className="card-price__description">
                {description}
            </small>
        </CardPriceWrapper>
    )
}