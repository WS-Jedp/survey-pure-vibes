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

    & a {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        
        & svg {
            margin-right: 1rem;
        }
    }

    @media (min-width: 760px) {
        flex-flow: row nowrap;
        justify-content: ${(props) => props.isHome ? 'flex-start' : 'space-between'};
    }
`