import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const loading = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const LoadingWrapper = styled(motion.div)`

    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    @media (min-width: 720px) {
        & small {
            font-size: 1.5rem;
        }
    }

    & .loading {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: none;
        border: solid 3px rgba(0,0,0,.1);
        border-left: solid 3px var(--color-valid);
        box-shadow: 0 0 12px 1px var(--color-valid);
        animation: ${loading} 1s linear infinite;
        margin: .6rem;
    }
`