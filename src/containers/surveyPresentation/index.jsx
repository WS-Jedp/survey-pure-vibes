import React from 'react'
import { Button } from '../../components/Button'
import { SurveyPresentationWrapper } from './styles'
import { ButtonSubmit } from '../../components/Button/ButtonSubmit'

import { containerVariants, downToUpVariants, upToDownVariants } from '../../styles/animations'
import { motion } from 'framer-motion'

export const SurveyPresentation = ({title, description, btnText = "Continue", action, submitBtn = false, children, disabled = false}) => {

    return (
        <SurveyPresentationWrapper disabled={disabled} className="survey-presentation" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
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
                {
                    submitBtn ? (
                        <ButtonSubmit title={btnText} variants={downToUpVariants}  />
                    ) : (
                        <Button title={btnText} variants={downToUpVariants} action={action} disabled={disabled} />
                    )
                }
            </motion.div>
        </SurveyPresentationWrapper>
    )
}