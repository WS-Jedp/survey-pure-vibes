import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FeatureParagraphWrapper = styled(motion.p)`
    width: 90%;
    height: auto;
    text-align: center;
    margin: auto;

    @media (min-width: 720px) {
        width: 66%;
        font-size: 2rem;
    }
`