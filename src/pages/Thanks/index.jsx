import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { HomeWrapper, IntroductionWrapper, InformationWrapper, HomeNavWrapper } from './styles'
import { LayoutStage } from '../../layouts/stage'

import { motion } from 'framer-motion'
import { leftToRightVariants, containerVariants, smoothTransision, upToDownVariants, rightToLeftVariants } from '../../styles/animations'

import { Footer } from '../../components/footer'
import { Textarea } from '../../components/forms/Textarea'
import { ButtonSubmit } from '../../components/Button/ButtonSubmit'

export const Thanks = () => {

    const { register, formState: { errors }, handleSubmit  } = useForm()

    const [isHiddenMain, setIsHiddenMain] = useState(false)
    const { push } = useHistory() 

    const submitOpinion = data => {
        push('/')
    }

    return (
        <LayoutStage>
            <HomeWrapper>
                <IntroductionWrapper isHidden={isHiddenMain} variants={containerVariants} transition={smoothTransision}  initial="hidden" animate="visible" exit="exit" >
                    <div>
                        <motion.h1 variants={leftToRightVariants} >
                            THANK YOU SO MUCH!
                        </motion.h1>
                        <motion.p  variants={leftToRightVariants}>
                            We know that together  we can change the life of millions of children!
                        </motion.p>
                        <motion.p  variants={leftToRightVariants}>
                            Are curious to see what we are up to? <br />  
                            Visit our Instagram Page <a className="link" href="https://www.instagram.com/purevibesglobal/">@purevibesglobal</a> <br />
                        </motion.p>
                    </div>

                    <div>
                        <motion.b variants={leftToRightVariants}>
                            Want to get directly in touch? 
                        </motion.b>
                        <br />
                        <motion.b variants={leftToRightVariants}>
                            Email: info@purevibesglobal.com 
                        </motion.b>
                        <br />
                        <motion.b variants={leftToRightVariants}>
                            Empowering Children, Empowering Humanity
                        </motion.b>
                    </div>

                </IntroductionWrapper>

                <InformationWrapper isHidden={isHiddenMain} variants={containerVariants} initial="hidden" animate="visible" exit="exit">
                    <motion.form variants={leftToRightVariants} onSubmit={handleSubmit(submitOpinion)}>
                        <label htmlFor="opinion">
                            Any  Comments, Concerns, or suggestions you may have would be greatly appreciated. Again, Thank you!
                        </label>
                        <textarea 
                            form={{...register("opinion", { required: true })}} 
                            placeholder="Write your opinion (Optional)"
                            id="opinion"
                        />
                        {
                            errors.opinion && (
                                <small>
                                    This field is required!
                                </small>
                            )
                        }
                        
                        <ButtonSubmit 
                            title="Send"
                        />
                    </motion.form>
                    <Footer variants={rightToLeftVariants} />
                </InformationWrapper>
            </HomeWrapper>
            <HomeNavWrapper>
                <small onClick={() => setIsHiddenMain(false)}>
                    {
                        !isHiddenMain ? (<b>Thanks</b>) : ('Suggests')
                    }
                </small>
                <small onClick={() => setIsHiddenMain(true)}>
                    {
                        isHiddenMain ? (<b>Suggests</b>) : ('Thanks')
                    }
                </small>
            </HomeNavWrapper>
        </LayoutStage>
    )
}