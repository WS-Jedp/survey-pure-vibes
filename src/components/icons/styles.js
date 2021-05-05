import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FaceWrapper = styled(motion.div)`
    position: relative;
    display: inline-flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;


    & svg {
        width: 81px;
        height: 81px;
        fill: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};

        @media (min-width: 720px) {
            width: 90px;
            height: 90px;
        }
    }

    & b {
        margin-bottom: .9rem;
        font-weight: 700; 
        font-size: 1.8rem;
        color: ${props => props.selected ? 'var(--color-valid)' : 'var(--color-dark)'};
    }
`