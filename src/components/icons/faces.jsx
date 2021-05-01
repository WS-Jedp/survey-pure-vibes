import React from 'react'
import { AiOutlineMeh, AiOutlineSmile, AiOutlineFrown } from 'react-icons/ai'
import { FaceWrapper } from './styles'

export const HappyFace = ({title}) => {

    return (
        <FaceWrapper title="happy">
            <AiOutlineSmile  />
            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}

export const NeutralFace = ({title}) => {

    return (
        <FaceWrapper title="neutral">
            <AiOutlineMeh />
            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}

export const SadFace = ({title}) => {

    return (
        <FaceWrapper title="sad">
            <AiOutlineFrown />
            {
                title && (
                    <b>
                        {title}
                    </b>
                )
            }
        </FaceWrapper>
    )
    
}