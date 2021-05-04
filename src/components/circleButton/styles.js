import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CircleButtonWrapper = styled(motion.button)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    color: var(--color-dark);
    min-width: 110px;
    width: 110px;
    max-width: 110px;
    min-height: 110px;
    height: 110px;
    max-height: 110px;
    border-radius: 50%;
    border: 1px solid ${props => props.selected ? 'var(--color-valid)' : 'rgba(0,0,0,0)'};
    border: none;
    box-shadow: 0 0 12px .6px ${props => props.selected ? 'var(--color-valid)' : 'rgba(0,0,0,.1)'};
    cursor: pointer;

    @media (min-width: 720px) {
        min-width: 140px;
        width: 140px;
        max-width: 140px;
        min-height: 140px;
        height: 140px;
        max-height: 140px;
    }
`