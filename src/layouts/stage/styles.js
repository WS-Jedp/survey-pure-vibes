import styled from 'styled-components'
import { motion } from 'framer-motion'


export const LayoutStageWrapper = styled(motion.section)`
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
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