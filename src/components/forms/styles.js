import styled from 'styled-components'
import { motion } from 'framer-motion'

export const InputTextWrapper = styled(motion.div)`
    position: relative;
    width: 90%;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin: auto;
    text-align: center;

    & label {
        font-size: 3rem;
        font-weight: 500;
        margin: 2rem;
    }

    & input {
        margin: 1rem;
        border: 1px solid ${props => props.error ? 'var(--color-error)' : 'rgba(0,0,0,0)'};
    }

    & small {
        color: var(--color-error);
        font-size: 1.2rem;
    }
`

export const OptionsWrapper = styled(motion.div)`
    position: relative;
    width: 80%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    & input[type="radio"] {
        width: 0;
        height: 0;
        opacity: 0;
        display: none;
    }

    @media(min-width: 720px) {
        width: 60%;
    }
`