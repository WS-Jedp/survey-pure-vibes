import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SolutionsContent = styled(motion.div)`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column nowrap;
    text-align: center;

    @media (min-width: 720px) {
        & p {
            margin: 3rem;
        }
    }
    & p,b {
        width: 90%;

        @media (min-width: 720px) {
            width: 60%;
        }
    }

    & .solution-cards {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: flex-start;

        @media (min-width: 720px) {
            margin: 3rem;
        }
    }
`