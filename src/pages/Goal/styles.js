import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GoalWrapepr = styled(motion.article)`
    width: 100%;
    padding: 1rem;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;

    @media(min-width:720px) {
        width: 70%;
    }

    & h1, h4, p {
        margin-bottom: 1rem;
    } 
`