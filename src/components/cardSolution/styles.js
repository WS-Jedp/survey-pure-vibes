import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardSolutionWrapper = styled(motion.div)`
    min-width: 240px;
    width: auto;
    max-width: 240px;
    height: auto;
    min-height: 90px;
    margin: 1.2rem;
    padding: 1.5em;
    text-align: ${props => props.isCenter ? 'center' : 'left'};
    align-items: ${props => props.isCenter ? 'center' : 'flex-start'};
    justify-content: center;
    background-color: white;
    color: var(--color-dark);
    border: 2px solid ${props => props.isComplete ? 'var(--color-valid)' : 'rgba(0,0,0,0)'};
    border-radius: 12px;
    @media(min-width: 720px) {
        min-height: 120px;
    }

    @media (min-width: 720px) {
        min-width: 360px;
    }

    & h3 {
        margin-bottom: .6rem;
        font-weight: 700; 
        font-size: 1.8rem;

        @media(min-width: 720px) {
            font-size: 2rem;
        }
    }
    
    & small {
        text-decoration: underline;
        color: ${props => props.isComplete ? 'var(--color-valid)' : 'var(--color-dark)'};
        opacity: .9;
        font-size: 1.6rem;
    }
`
