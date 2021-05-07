import styled from 'styled-components'
import { motion } from 'framer-motion'

export const LoadingWrapper = styled(motion.section)`
    position: relative;
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`