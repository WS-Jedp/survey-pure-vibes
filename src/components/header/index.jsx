import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'
import { HeaderWrapper } from './styles'

export const Header = ({isHome = false}) => {

    const { goBack } = useHistory()

    return (
        <HeaderWrapper isHome={isHome}>
            {
                !isHome && (
                    <Link onClick={() => goBack()}>
                        <AiOutlineArrowLeft size="20" />
                        Back
                    </Link>   
                )
            }
            <b>
                Pure Vibes Global
            </b>
            <div></div>
        </HeaderWrapper>
    )
}