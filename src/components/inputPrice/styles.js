import styled from 'styled-components'
import { motion } from 'framer-motion'

export const InputPriceWrapper = styled(motion.div)`
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
    border-radius: 15px;
    box-shadow: 0 0 9px ${props => props.isSelected ? 'rgba(109, 255, 143, .6)' : 'rgba(0,0,0,.2)'};
    cursor: pointer;
    margin: 2.1rem;

    & #new-price-radio {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
    }

    & .new-price {
        margin: 0 !important;
        margin-bottom: .9rem;
        font-weight: 700; 
        font-size: 2rem;
    }

    & input[type="number"] {
        width: 90%;
    }

    & input[type="number"]:focus {
        .input-price {
            border: 2px solid var(--color-valid);
        }
    }

    & small {
        opacity: .9;
        margin-top: .6rem;
    }
`