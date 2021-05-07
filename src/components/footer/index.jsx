import React from 'react'
import { AiFillInstagram, AiOutlineGlobal } from 'react-icons/ai'
import { FooterWrapper } from './styles'

export const Footer = ({variants = {}}) => {

    return (
        <FooterWrapper variants={variants}>
            <div className="social-media">
                <a href="https://www.instagram.com/purevibesglobal/?hl=es" target="_blank">
                    <AiFillInstagram />
                </a>
                <a href="https://www.purevibesglobal.com/" target="_blank">
                    <AiOutlineGlobal />
                </a>
            </div>
            <small>
                ©2021, All rights reserved | Pure Vibes
            </small>
        </FooterWrapper>
    )
}