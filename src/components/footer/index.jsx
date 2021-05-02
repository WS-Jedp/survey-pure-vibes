import React from 'react'
import { AiFillInstagram, AiOutlineGlobal } from 'react-icons/ai'
import { FooterWrapper } from './styles'

export const Footer = () => {

    return (
        <FooterWrapper>
            <div className="social-media">
                <a href="">
                    <AiFillInstagram />
                </a>
                <a href="">
                    <AiOutlineGlobal />
                </a>
            </div>
            <small>
                ©2021, All rights reserved | Pure Vibes
            </small>
        </FooterWrapper>
    )
}