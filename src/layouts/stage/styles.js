import styled from 'styled-components'
import { motion } from 'framer-motion'


export const LayoutStageWrapper = styled(motion.section)`
    display: flex;
    width: 100%;
    min-height: 100vh;
    position: relative;
    flex-flow: column nowrap;
    align-items: center;    
    background-color: var(--color-bg);

    & .layout-stage-content {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
`