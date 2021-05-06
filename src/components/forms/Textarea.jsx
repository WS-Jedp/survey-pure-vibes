import React from 'react'
import { InputTextWrapper } from './styles'

export const Textarea = ({title, placeholder, variants, defaultValue = "", error, form = {}}) => {

    return (
        <InputTextWrapper isError={error}>
            <label htmlFor={`input-textarea-${title}`}>
                {title}
            </label>
            <textarea 
                name={`input-textarea-${title}`} 
                id={`input-textarea-${title}`} 
                cols="30" rows="10" 
                placeholder={placeholder}
                defaultValue={defaultValue ? defaultValue : null}
                {...form}
            />
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