import React from 'react'
import { Button } from '../../components/Button'
import { SurveyPresentationWrapper } from './styles'

import { containerVariants, downToUpVariants, leftToRightVariants, upToDownVariants } from '../../styles/animations'
import { motion } from 'framer-motion'

export const SurveyPresentation = ({title, description, btnText = "Continue", action, children}) => {

    return (
        <SurveyPresentationWrapper className="survey-presentation" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            <motion.div className="survey-presentation__title" >
                <motion.h1 variants={upToDownVariants}>
                    {title}
                </motion.h1>
                {
                    description && (
                        <motion.p variants={upToDownVariants}>
                            {description}
                        </motion.p>
                    )
                }
            </motion.div>

            <motion.div variants={containerVariants} className="survey-presentation__content">
                {
                    children
                }
            </motion.div>

            <motion.div variants={downToUpVariants} className="survey-presentation__button">
                <Button title={btnText} variants={downToUpVariants} action={action}  />
            </motion.div>
        </SurveyPresentationWrapper>
    )
}