import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { HeaderWrapper } from './styles'

export const Header = ({isHome = false}) => {

    const { goBack } = useHistory()

    return (
        <HeaderWrapper isHome={isHome}>
            {
                !isHome && (
                    <Link onClick={() => goBack()}>
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