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
        @media (min-width: 1080px) {
            max-width: 300px;
            margin: 0 3rem;
        }
    }
`

export const SurveyTransparency = styled(motion.article)`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: auto;
    text-align: center;
    margin: auto;

    @media (min-width: 720px) {
        width: 60%;
        & p,b {
            font-size: 1.9rem;
            line-height: 3rem;
        }
    }
`

export const SurveyTransparencyParagraphs = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
    margin: 1rem;
    padding: 2rem;
`