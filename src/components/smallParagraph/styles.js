import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SmallParagraphWrapper = styled(motion.div)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: ${props => props.isCenter ? 'center' : 'flex-start'};
    text-align: center;

    & b {
        margin-bottom: .3rem;
        font-weight: 600; 
        font-size: 1.8rem;
    }

    & p {
        font-size: 1.6rem;
    }
`