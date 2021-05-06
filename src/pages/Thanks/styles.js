import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HomeWrapper = styled(motion.section)`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HomeNavWrapper = styled(motion.nav)`
    position: absolute;
    width: 100%;
    height: 90px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    box-shadow: 0 0 9px 1px rgba(0,0,0, .1);

    @media (min-width: 720px) {
        display: none;
    }
`

export const IntroductionWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    width: ${props => props.isHidden ? '0%' : '100%'};
    height: ${props => props.isHidden ? '0%' : '100%'};
    overflow: hidden;
    text-align: left;
    padding: ${props => props.isHidden ? '0' : '1.5rem'};

    & p {
            margin: 1rem 0;
            font-size: 2rem;
        }

    @media (min-width: 720px) {
        min-height: 80vh;
        align-items: flex-start;
        justify-content: space-evenly;
        & p {
            margin: 1rem 0;
            font-size: 2.2rem;
        }
    }



    @media(min-width: 720px) {
        width: 60%;
        max-width: 60%;
        padding: 1.5rem 9rem;
    } 

    & h1 {
        font-size: 3.2rem;
        margin-bottom: 1rem;

        @media (min-width: 720px) {
            font-size: 6rem;
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
    height: ${props => props.isHidden ? '100%' : '0%'};
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding: ${props => props.isHidden ? '1.5rem' : '0'};
    overflow: hidden;

    @media (min-width: 720px) {
        min-height: 80vh;
        justify-content: flex-end;

        & p {
            margin: 1rem 0;
            font-size: 2.2rem;
        }
    }

    & form {
        position: relative;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;

        & label {
            margin: 1rem 0;
        }

        & textarea {
            width: 100%;
            min-height: 200px;
            border-radius: 5px;
        }

        & small {
            color: var(--color-error);
            font-size: 1.4rem;
        }
    }


    @media(min-width: 720px) {
        width: 40%;
        max-width: 40%;
        padding: 1.5rem 9rem;
        height: 100%;
    } 
`