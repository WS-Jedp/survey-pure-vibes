import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { GoalWrapepr } from './styles'
import { containerVariants, leftToRightVariants, upToDownVariants } from '../../styles/animations'

import { motion } from 'framer-motion'

export const Goal = () => {

    const { push } = useHistory()
    const onBtn = () => push('/ready')

    return (
        <LayoutSurvey>
            <SurveyPresentation title="" btnText="Continue" action={onBtn}>
                <GoalWrapepr variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h2>
                        OUR GOAL
                    </motion.h2>
                    <motion.h1 variants={upToDownVariants}>
                        2.5 MILLION KIDS FREED FROM GENERATIONAL POVERTY
                    </motion.h1>
                    <motion.p variants={upToDownVariants}>
                        Over 500 Million <b>children are living in poverty.</b>  Our goal is to lower that number by .5%.
                    </motion.p>

                    <motion.h2 variants={leftToRightVariants}>WHICH ONES?</motion.h2>
                    <motion.p variants={leftToRightVariants}>
                    We target children who live in <b>low to extremely low economic conditions</b> of our world. Specifically those without the resources to engage in foreign language courses.
                    </motion.p>
                </GoalWrapepr>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}