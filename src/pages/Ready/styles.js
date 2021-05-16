import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ReadyWrapper = styled(motion.div)`
    width: 90%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    margin: auto;

    & h1 {
        margin-bottom: 2rem;
    }

    @media (min-width: 720px) {
        width: 60%;
        & p,b  {
            font-size: 2.4rem;
            line-height: 4rem;
        }
    }

`