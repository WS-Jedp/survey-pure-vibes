import React from 'react'
import { InputPriceWrapper } from './styles'

export const InputPrice = ({title, placeholder, setValue, value, isSelected = false}) => {

    return (
        <InputPriceWrapper isSelected={isSelected}>
            <label id="new-price">
                {title}
            </label>
            <input type="number" onChange={setValue} value={value} placeholder={placeholder} id="new-price" />
        </InputPriceWrapper>
    )
}