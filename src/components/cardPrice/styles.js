import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardPriceWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    min-width: 200px;
    width: 200px;
    max-width: 200px;
    min-height: 120px;
    height: 120px;
    max-height: 120px;
    border: 2px solid ${props => props.isSelected ? 'var(--color-valid)' : 'var(--color-light)'};
    transition: .3s ease-in-out;
    background-color: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 0 9px ${props => props.isSelected ? 'rgba(109, 255, 143, .6)' : 'rgba(0,0,0,.2)'};

    & small {
        opacity: .9;
        margin-top: .6rem;
    }
`