import styled from 'styled-components'
import { motion } from 'framer-motion'

export const FeatureMembershipWrapper = styled(motion.div)`
    position: relative;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    @media (min-width: 720px) {
        width: 81%;
    }
`

export const FeatureContainerWrapper = styled(motion.section)`
    position: relative;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    & p {
        width: 90%;
        text-align: center;

        @media (min-width: 720px) {
            width: 60%;
            font-size: 2.4rem;
            margin-bottom: 2rem;
        }
    }
`