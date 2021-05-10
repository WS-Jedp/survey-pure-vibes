import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FeatureParagraphWrapper = styled(motion.div)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;

    & h2 {
        margin: .6rem;
        margin: 3rem;
        
        
    } 

    & p {
        width: 90%;
        padding: 2rem;
        height: auto;
        text-align: center;
        margin: auto;

        @media (min-width: 1080px) {
            width: 60%;
        }
    }

    & p, b {

        @media (min-width: 1080px) {
            font-size: 2.3rem;
            line-height: 3.3rem;
        }

    }
`