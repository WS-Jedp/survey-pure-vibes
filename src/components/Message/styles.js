import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MessageWrapper = styled(motion.p)`
    width: 90%;
    text-align: center;
    font-size: 4rem;
    line-height: 5rem;
    margin: auto;

    @media(min-width: 720px) {
        width: 50%;
        font-size: 8rem;
        line-height: 9rem;
    }
`