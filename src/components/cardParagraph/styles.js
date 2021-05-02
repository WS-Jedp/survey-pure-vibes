import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardParagraphWrapper = styled(motion.article)`
    min-width: 240px;
    width: auto;
    max-width: 240px;
    height: auto;
    min-height: 120px;
    text-align: ${props => props.isCenter ? 'center' : 'left'};
    background-color: white;
    color: var(--color-dark);
    border-radius: 12px;
    margin: 1rem;
    padding: 1.6rem;
    @media (min-width: 720px) {
        margin: 1.2rem;
        padding: 1.5rem;
    }

    @media (min-width: 720px) {
        min-width: 360px;
    }

    & h3 {
        margin-bottom: .9rem;
        font-weight: 700; 
        font-size: 1.8rem;

        @media(min-width: 720px) {
            font-size: 2rem;
        }
    }

    & p {
        font-size: 1.6rem;

        @media(min-width: 720px) {
            font-size: 1.8rem;
        }
    }
`