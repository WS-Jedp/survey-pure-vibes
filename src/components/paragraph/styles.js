import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ParagraphWrapper = styled(motion.article)`
    width: auto;
    height: auto;
    margin: 1.2rem;
    text-align: ${props => props.isCenter ? 'center' : 'left'};

    & h3 {
        margin-bottom: .9rem;
        font-weight: 700; 
        font-size: 2rem;
    }

    & p {
        font-size: 1.6rem;
    }
`