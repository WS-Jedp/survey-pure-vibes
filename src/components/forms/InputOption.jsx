import React, { useState, useRef, useEffect } from 'react'
import { CircleButton } from '../circleButton'
import { InputTextWrapper, OptionsWrapper } from './styles'

export const InputOption = ({options = [], title, form = {}, setValue, error}) => {

    const [currentValue, setCurrentValue] = useState('')

    useEffect(() => {

        setValue(currentValue)
        console.log(currentValue)
        
    }, [currentValue])


    return (
        <InputTextWrapper>
            <label htmlFor={`input-textarea-${title}`}>
                {title}
            </label>
            <OptionsWrapper>
                {
                    options.map(data => (
                        <>
                        <input type="radio" name={data.name} {...form} value={data.value} checked={data.value == currentValue} />
                        <CircleButton 
                            title={data.value}
                            action={() => setCurrentValue(data.value)}
                            selected={(currentValue == data.value)}
                        />
                        </>
                    ))
                }
            </OptionsWrapper>

            {
                error && (
                    <small>
                        This field is required!
                    </small>
                )
            }
        </InputTextWrapper>
    )
}