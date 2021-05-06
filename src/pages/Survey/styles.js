import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SurveyWrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`

export const SurveyParagraphsRow = styled(motion.section)`
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
`