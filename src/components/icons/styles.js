import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FaceWrapper = styled(motion.div)`
    position: relative;
    display: inline-flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;



    & svg {
        width: 81px;
        height: 81px;

        @media (min-width: 720px) {
            width: 100px;
            height: 100px;
        }
    }

    & b {
        margin-bottom: .9rem;
        font-weight: 700; 
        font-size: 1.8rem;
    }
`