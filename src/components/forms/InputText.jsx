import React from 'react'
import { InputTextWrapper } from './styles'

export const InputText = ({title, placeholder, variants, error, form = {}, type="text"}) => {

    return (
        <InputTextWrapper variants={variants} error>
            <label htmlFor={`input-${type}-${title}`}>
                {title}
            </label>
            <input type={type} id={`input-${type}-${title}`} placeholder={placeholder} {...form}/>
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