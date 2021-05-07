import styled from 'styled-components'
import { motion } from 'framer-motion'


export const LayoutStageWrapper = styled(motion.section)`
    display: flex;
    width: 100%;
    position: relative;
    flex-flow: column nowrap;
    align-items: flex-start;    
    background-color: var(--color-bg);

    

    @media (min-width: 1080px) {
        align-items: center;    
    }

    & .layout-stage-content {
        width: 100%;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
    
        @media (min-width: 1080px) {
            justify-content: space-around;
        }
    }
`