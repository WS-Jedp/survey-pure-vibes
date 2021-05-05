import React, { useState, useRef, useEffect } from 'react'
import { HappyFace, NeutralFace, SadFace } from '../icons/faces'
import { InputTextWrapper, OptionsWrapper } from './styles'




export const InputEmotion = ({options = [], title, form = {}, setValue, error}) => {

    const [currentValue, setCurrentValue] = useState('')

    useEffect(() => {
        setValue(currentValue)
    }, [currentValue])

    const DefineFace = ({data}) => {

        switch (data.value) {
            case 1:
                return (
                    <SadFace title={data.title} action={() => setCurrentValue(data.value)} selected={(currentValue == data.value)} />
                )
            case 3:
                return (
                    <NeutralFace title={data.title} action={() => setCurrentValue(data.value)} selected={(currentValue == data.value)}/>
                )
            case 5:
                return (
                    <HappyFace title={data.title} action={() => setCurrentValue(data.value)} selected={(currentValue == data.value)}/>
                )
            default:
                return null
            
        }
    }


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
                            <DefineFace data={data} />
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