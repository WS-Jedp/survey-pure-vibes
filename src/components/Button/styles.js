import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ButtonWrapper = styled(motion.button)`
    min-width: 190px;
    width: auto;
    max-width: 210px;
    min-height: 42px;
    height: auto;
    max-height: 60px;
    padding: 1.6rem;
    background-color: var(--color-dark);
    color: var(--color-light); 
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: .1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
`