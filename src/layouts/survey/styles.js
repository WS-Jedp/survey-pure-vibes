import styled from 'styled-components'
import { motion } from 'framer-motion'


export const LayoutSurveyWrapper = styled(motion.section)`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--color-bg);
`