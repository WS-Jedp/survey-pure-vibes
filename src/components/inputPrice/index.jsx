import React, { useState } from 'react'
import { InputPriceWrapper } from './styles'

const transition = {
    duration: .5,
    ease: [.6, .01, -0.05, .9]
}


export const InputPrice = ({title, placeholder, form = {}, isSelected = false, value, setValue, setGeneralValue}) => {

    const [currValue, setCurrValue] = useState(0)

    const handlePrice = (ev) => {
        ev.preventDefault()
        setValue(ev.currentTarget.value)
        setGeneralValue(ev.currentTarget.value)
        setCurrValue(ev.currentTarget.value)
    }

    const onPrice = ev => {
        ev.preventDefault()
        setValue(currValue)
        setGeneralValue(currValue)
    }

    return (
        <InputPriceWrapper 
            isSelected={isSelected} 
            whileHover={{scale: 1.05, transition: transition}} 
            value={value} 
            className="input-price"
            onClick={onPrice}
        >
            <label htmlFor="new-price" className="new-price">
                {title}
            </label>
            <input type="radio" {...form} id="new-price-radio" checked={isSelected} value={currValue} />
            <input type="number" onChange={handlePrice} placeholder={placeholder} id="new-price" required={false} />
        </InputPriceWrapper>
    )
}