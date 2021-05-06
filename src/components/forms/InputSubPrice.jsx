import React, { useState, useRef, useEffect } from 'react'
import { InputPrice } from '../inputPrice'
import { CardPrice } from '../cardPrice'
import { InputTextWrapper, OptionsPriceWrapper } from './styles'

export const InputSubPrice = ({options = [], title, form = {}, setValue, error, defaultValue = ""}) => {

    const [currentValue, setCurrentValue] = useState(defaultValue)
    const [personalValue, setPersonalValue] = useState(null)

    useEffect(() => {
        setValue(currentValue)
    }, [currentValue, personalValue])


    return (
        <InputTextWrapper>
            <label htmlFor={`input-textarea-${title}`}>
                {title}
            </label>
            <OptionsPriceWrapper lg={true}>
                {
                    options.map(data => (
                        <div key={data.value}>
                            <input type="radio" {...form} value={data.value} checked={data.value == currentValue} />
                            <CardPrice 
                                value={data.value}
                                description={data.description}
                                isSelected={currentValue == data.value}
                                action={() => setCurrentValue(data.value)}
                            />
                        </div>
                    ))
                }
                <InputPrice 
                    title="Other"
                    form={form}
                    placeholder="How much?"
                    setGeneralValue={setCurrentValue}
                    isSelected={currentValue == personalValue}
                    value={personalValue}
                    setValue={setPersonalValue}
                />
            </OptionsPriceWrapper>

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