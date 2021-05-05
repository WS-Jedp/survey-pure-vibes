import React, { useState, useRef, useEffect } from 'react'
import { CircleButton } from '../circleButton'
import { InputTextWrapper, OptionsWrapper } from './styles'

export const InputOption = ({options = [], title, form = {}, setValue, error}) => {

    const [currentValue, setCurrentValue] = useState('')

    useEffect(() => {
        setValue(currentValue)
    }, [currentValue])


    return (
        <InputTextWrapper>
            <label htmlFor={`input-textarea-${title}`}>
                {title}
            </label>
            <OptionsWrapper>
                {
                    options.map(data => (
                        <div key={data.value}>
                            <input type="radio" name={data.name} {...form} value={data.value} checked={data.value == currentValue} />
                            <CircleButton 
                                title={data.value}
                                action={() => setCurrentValue(data.value)}
                                selected={(currentValue == data.value)}
                            />
                        </div>
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