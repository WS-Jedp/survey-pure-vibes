import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardParagraphWrapper = styled(motion.article)`
    min-width: 300px;
    width: auto;
    height: auto;
    min-height: 120px;
    margin: 1.2rem;
    padding: 1.5em;
    text-align: ${props => props.isCenter ? 'center' : 'left'};
    background-color: white;
    color: var(--color-dark);
    border-radius: 12px;

    @media (min-width: 720px) {
        min-width: 360px;
    }

    & h3 {
        margin-bottom: .9rem;
        font-weight: 700; 
        font-size: 2rem;
    }
`