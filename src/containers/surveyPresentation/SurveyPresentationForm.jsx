import React from 'react'
import { Button } from '../../components/Button'
import { SurveyPresentationFormWrapper } from './styles'
import { ButtonSubmit } from '../../components/Button/ButtonSubmit'

import { containerVariants, downToUpVariants, leftToRightVariants, upToDownVariants } from '../../styles/animations'
import { motion } from 'framer-motion'

export const SurveyPresentationForm = ({title, description, btnText = "Continue", action, submitBtn = true, onSubmit = () => {}, children}) => {

    return (
        <SurveyPresentationFormWrapper  onSubmit={onSubmit} className="survey-presentation" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
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
                        <Button title={btnText} variants={downToUpVariants} action={action}  />
                    )
                }
            </motion.div>
        </SurveyPresentationFormWrapper>
    )
}