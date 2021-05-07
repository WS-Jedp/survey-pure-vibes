import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeWrapper = styled(motion.section)`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    max-height: 110vh;
`

export const HomeNavWrapper = styled(motion.nav)`
    position: sticky;
    width: 100%;
    height: 60px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    box-shadow: 0 0 9px 1px rgba(0,0,0, .1);

    @media (min-width: 1080px) {
        display: none;
    }
`

export const IntroductionWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: ${props => props.isHidden ? '0%' : '100%'};
    height: ${props => props.isHidden ? '0%' : 'auto'};
    overflow: hidden;
    text-align: center;
    padding: ${props => props.isHidden ? '0' : '1.5rem'};


    @media(min-width: 1080px) {
        width: 60%;
        max-width: 60%;
        padding: 1.5rem 9rem;
    } 

    & h1 {
        font-size: 3.2rem;
        margin-bottom: 1rem;

        @media (min-width: 1080px) {
            font-size: 4.5rem;
        }
    }

    & h3 {
        font-size: 2.1rem;
        margin-bottom: 1rem;
    }

    & iframe {
        margin: 2rem;
        width: 80%;
        @media(min-width: 1080px) {
            width: 72%;
            height: 210px;
        }
    }
`

export const InformationWrapper = styled(motion.div)`
    position: relative;
    width: ${props => props.isHidden ? '100%' : '0%'};
    height: ${props => props.isHidden ? 'auto' : '0%'};
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding: ${props => props.isHidden ? '1.5rem' : '0'};
    overflow: hidden;


    @media(min-width: 1080px) {
        width: 40%;
        max-width: 40%;
        padding: 1.5rem 9rem;
        height: 100%;
    } 
`