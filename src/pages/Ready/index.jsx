import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { ReadyWrapper } from './styles'

import { motion } from 'framer-motion'
import { leftToRightVariants } from '../../styles/animations'

export const Ready = () => {

    const { push } = useHistory()
    const onBtn = () => push('/manners')

    return (
        <LayoutSurvey>
            <SurveyPresentation title="Ready To Make An Impact?" btnText="Let's Go!" action={onBtn}>
                <ReadyWrapper>
                    <motion.p variants={leftToRightVariants} exit={{opacity: 0}}>
                    We ask that you answer some questions to help us create <b>the perfect subscription for our members.</b> 
                    <br />
                    <br />
                    On behalf of the entire Pure Vibes Global team,
                    <b>thank you in advance for your responses</b>
                     ❤
                    </motion.p>
                </ReadyWrapper>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}
