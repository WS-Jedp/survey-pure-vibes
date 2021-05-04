import React from 'react'
import { AiOutlineMeh, AiOutlineSmile, AiOutlineFrown } from 'react-icons/ai'
import { FaceWrapper } from './styles'

const transition = {
    duration: .5,
    ease: [.6, .01, -0.05, .9]
}

export const HappyFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="happy" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
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

export const NeutralFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="neutral" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
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

export const SadFace = ({title, action = () => {}, selected}) => {

    return (
        <FaceWrapper title="sad" onClick={action} selected={selected} whileHover={{scale: 1.05, transition: transition}}>
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