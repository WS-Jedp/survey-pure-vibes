import React from 'react'
import { InputTextWrapper } from './styles'

export const Textarea = ({title, placeholder, variants, error, form = {}}) => {

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