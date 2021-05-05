import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardPriceWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    min-width: 180px;
    width: 180px;
    max-width: 180px;
    min-height: 100px;
    height: 100px;
    max-height: 100px;
    border: 2px solid ${props => props.isSelected ? 'var(--color-valid)' : 'var(--color-light)'};
    transition: .3s ease-in-out;
    background-color: white;
    padding: 2rem;
    margin: 2.1rem;
    border-radius: 15px;
    box-shadow: 0 0 9px ${props => props.isSelected ? 'rgba(109, 255, 143, .6)' : 'rgba(0,0,0,.2)'};
    cursor: pointer;

    & .card-price__title {
        font-size: 2.3rem;
    }

    & .card-price__description {
        color: var(--color-black);
        opacity: .9;
    }
`