import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'
import { HeaderWrapper } from './styles'
import { containerVariants, leftToRightVariants, upToDownVariants } from '../../styles/animations'
import { motion } from 'framer-motion'

export const Header = ({isHome = false}) => {

    const { goBack } = useHistory()

    return (
        <HeaderWrapper isHome={isHome} variants={upToDownVariants} initial="hidden" animate="visible" exit="exit" >
            {
                !isHome && (
                    <Link onClick={() => goBack()}>
                        <AiOutlineArrowLeft size="20" />
                        Back
                    </Link>   
                )
            }
            <motion.b variants={upToDownVariants}>
                Pure Vibes Global
            </motion.b>
        </HeaderWrapper>
    )
}