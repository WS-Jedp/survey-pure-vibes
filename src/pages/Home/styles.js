import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeWrapper = styled(motion.section)`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
`

export const IntroductionWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    text-align: center;

    @media(min-width: 720px) {
        width: 50%;
        max-width: 50%;
    } 
`