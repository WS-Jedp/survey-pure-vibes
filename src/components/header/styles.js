import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeaderWrapper = styled(motion.header)`
    box-sizing: border-box;
    display: flex;
    flex-flow: column-reverse nowrap;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 90px;
    padding: 2rem;

    @media (min-width: 760px) {
        flex-flow: row nowrap;
        justify-content: ${(props) => props.isHome ? 'flex-start' : 'space-between'};
    }
`