import styled from 'styled-components'
import { motion } from 'framer-motion'


export const SolutionContentWrapper = styled(motion.section)`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;


    & article {
        @media (min-width: 720px) {
            max-width: 300px;
            margin: 0 3rem;
        }
    }

    & iframe {
        margin: 3rem;
        @media (min-width: 720px) {
            width: 30%;
            height: 240px;
            margin: 0  3rem;
        }
    }
`