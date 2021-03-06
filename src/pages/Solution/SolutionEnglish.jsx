import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutSurvey } from '../../layouts/survey'
import { SurveyPresentation } from '../../containers/surveyPresentation'
import { SolutionContentWrapper } from './styles'

import { motion } from 'framer-motion'

import { Paragraph } from '../../components/paragraph'
import { containerVariants, upToDownVariants } from '../../styles/animations'

const ProblemText = () => (<>
Children in developing/emerging countries are consistently not receiving proper English education, leading to poor English development.<br />
This lack of proficiency keeps them submerged in <b>the poverty cycle.</b>
</>)

const SolutionText = () => (<>
    We will teach <b>English</b> to children <b>for free!</b> <br />
    These kids do not have access to proper English classes. <b>Our Bilingual System</b> will ensure them <b>access to opportunities</b> later in life.
</>)

export const SolutionEnglish = () => {
    const { push } = useHistory()
    const onBtn = () => push('/solutions')
    return (
        <LayoutSurvey>
            <SurveyPresentation title="Billingual System Project" btnText="Our Solutions" action={onBtn}>
                <SolutionContentWrapper variants={containerVariants} initial="hidden" animate="visible" >
                    <Paragraph 
                        title="The Problem"
                        content={<ProblemText />}
                        variants={upToDownVariants}
                    />
                    <Paragraph 
                        title="Our Solution"
                        content={<SolutionText />}
                        variants={upToDownVariants}
                    />
                    <motion.iframe variants={upToDownVariants} src="https://www.youtube.com/embed/PHYu4vqZK24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </SolutionContentWrapper>
            </SurveyPresentation>
        </LayoutSurvey>
    )
}