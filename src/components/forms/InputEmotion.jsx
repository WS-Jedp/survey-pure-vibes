import React, { useState, useEffect } from 'react'
import { HappyFace, NeutralFace, SadFace, NoneFace, RelaxFace} from '../icons/faces'
import { InputTextWrapper, FacesWrapper } from './styles'




export const InputEmotion = ({options = [], title, form = {}, setValue, error, defaultValue = ""}) => {

    const [currentValue, setCurrentValue] = useState(defaultValue)

    useEffect(() => {
        setValue(currentValue)
    }, [currentValue])

    const DefineFace = ({data}) => {

        switch (data.value) {
            case 1:
                return (
                    <NoneFace title={data.title} action={() => setCurrentValue(data.value)} selected={(currentValue == data.value)} />
                )
            case 2:
                return (
                    <SadFace title={data.title} action={() => setCurrentValue(data.value)} selected={(currentValue == data.value)}/>
                )
            case 3:
                return (
                    <NeutralFace title={data.title} action={() => setCurrentValue(data.value)} selected={(currentValue == data.value)}/>
                )
            case 4:
                return (
                    <RelaxFace title={data.title} action={() => setCurrentValue(data.value)} selected={(currentValue == data.value)}/>
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
            <FacesWrapper>
                {
                    options.map(data => (
                        <>
                            <input type="radio" name={data.name} {...form} value={data.value} checked={data.value == currentValue} />
                            <DefineFace data={data} />
                        </>
                    ))
                }
            </FacesWrapper>

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