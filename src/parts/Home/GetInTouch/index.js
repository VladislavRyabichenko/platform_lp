import clsx from 'clsx'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import Profile from 'assets/icon/Profile'
import Mail from 'assets/icon/Sms'
import Phone from 'assets/icon/Call'
import Company from 'assets/icon/Buliding'
import Message from 'assets/icon/DocumentText'

import { Button } from 'components/common'
import ContractIllustration from 'assets/illustration/ContactIllustration'

import { GradientContact } from '../BgGradient'

import { StaggerChildren, FadeIn } from 'animation'

// Modal
import {
  ContactFailedSent as ModalFailedSent,
  ContactSuccessSent as ModalSuccessSent
} from 'components/Modal'

const GetInTouch = () => {
  const [isOpen, setIsOpen] = useState('')
  const [isSendForm, setIsSendForm] = useState(false)

  useEffect(() => {
    if (isSendForm) {
      setIsSendForm(false)

      navigator.onLine ? setIsOpen('success') : setIsOpen('failed')
    }
  }, [isSendForm])

  return (
    <>
      <ModalFailedSent isOpen={isOpen === 'failed'} onClose={() => setIsOpen('')} />
      <ModalSuccessSent isOpen={isOpen === 'success'} onClose={() => setIsOpen('')}/>

      <motion.section
        custom={{ staggerChildren: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -250px 0px' }}
        variants={StaggerChildren}
        className={clsx(
          'relative',
          'pt-10 md:pt-20',
          'pb-10 md:pb-[104px] lg:pb-[120px]',
          'px-6 md:px-10 xl:px-[140px]'
        )}
      >
        <GradientContact className="absolute bottom-0 right-0 z-[-1] overflow-visible" />
        <motion.h2
          custom={{ yStart: -75, duration: 1.5 }}
          variants={FadeIn}
          className="h4-bold md:h2-bold text-black dark:text-white tracking-[0.5px] text-center"
        >Get in touch with us</motion.h2>
        <div className="flex justify-center space-x-8 mt-12">
          <Form
            custom={{ xStart: -100, duration: 1.25 }}
            variants={FadeIn}
            onSend={() => setIsSendForm(true)}
          />
          <ContractIllustration
            custom={{ xStart: 100, duration: 1.25 }}
            variants={FadeIn}
            className={clsx(
              'mt-8',
              'hidden lg:block',
              'max-w-[663px]',
              'w-full'
            )}
          />
        </div>
      </motion.section>
    </>
  )
}

const Form = ({ custom, variants, onSend }) => {
  const [contactForm, setContactForm] = useState({
    fullname: '',
    email: '',
    message: ''
  })
  const [isFilled, setIsFilled] = useState(false)

  const handleContactForm = (value) => {
    return setContactForm((state) => {
      let temp = { ...state }
      temp = {
        ...temp,
        ...value
      }
      return { ...temp }
    })
  }

  useEffect(() => {
    if (contactForm.fullname === '' || contactForm.email === '' || contactForm.message === '') {
      return setIsFilled(false)
    }
    return setIsFilled(true)
  }, [contactForm])

  return (
    <motion.form
      custom={custom}
      variants={variants}
      className={clsx(
        'w-full tablet:w-[465px] bg-white dark:bg-white/[0.06] rounded-lg',
        'p-4 md:px-8 md:py-10',
        'space-y-4 md:space-y-6'
      )}
    >
      <div className={clsx(
        'w-full',
        'flex',
        'flex-col md:flex-row tablet:flex-col',
        'justify-between',
        'space-x-0 md:space-x-6 tablet:space-x-0',
        'space-y-4 md:space-y-0 tablet:space-y-6'
      )}>
        <FormGroup id="full-name" type="text" icon={Profile} label="Full Name" placeholder="Full name" isRequired={true}
          value={contactForm.fullname}
          onChange={(e) => handleContactForm({ fullname: e.target.value })}
        />
        <FormGroup id="email-address" type="email" icon={Mail} label="Email Address" placeholder="Email address" isRequired={true}
          value={contactForm.email}
          onChange={(e) => handleContactForm({ email: e.target.value })}
        />
      </div>

      <div className={clsx(
        'w-full',
        'flex',
        'flex-col md:flex-row tablet:flex-col',
        'justify-between',
        'space-x-0 md:space-x-6 tablet:space-x-0',
        'space-y-4 md:space-y-0 tablet:space-y-6'
      )}>
        <FormGroup id="phone-number" type="number" icon={Phone} label="Phone Number" placeholder="(308) 555-0121"
          value={contactForm.phone}
          onChange={(e) => handleContactForm({ phone: e.target.value })}
        />
        <FormGroup id="company" type="text" icon={Company} label="Company" placeholder="Your company name..."
          value={contactForm.company}
          onChange={(e) => handleContactForm({ company: e.target.value })}
        />
      </div>

      <FormGroup id="message" type="textarea" icon={Message} label="Message" placeholder="Please type your message here..." isRequired={true}
        value={contactForm.message}
        onChange={(e) => handleContactForm({ message: e.target.value })}
      />

      <Button
        className={clsx(
          'rounded-xl py-[18px] px-[26px] w-fit h-fit',
          isFilled
            ? 'bg-primary-500 text-white'
            : 'bg-black/[0.08] dark:bg-white/10 text-black/[0.32] dark:text-white/20'
        )}
        onClick={onSend}
        isDisable={isFilled === false}
      >
        <p>Send Message</p>
        <div>
          <svg className={clsx(
            isFilled ? 'stroke-white' : 'stroke-black/[0.32] dark:stroke-white/20'
          )} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.92669 3.52389L15.06 7.09056C18.26 8.69056 18.26 11.3072 15.06 12.9072L7.92669 16.4739C3.12668 18.8739 1.16835 16.9072 3.56835 12.1156L4.29335 10.6739C4.47668 10.3072 4.47668 9.69889 4.29335 9.33222L3.56835 7.88222C1.16835 3.09056 3.13502 1.12389 7.92669 3.52389Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.53516 10H9.03516" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* <img src={Send} alt=""/> */}
      </Button>
    </motion.form>
  )
}

const FormGroup = ({ className, id, type, icon: Icon, label, placeholder, isRequired, value, onChange }) => {
  return (
    <div className={clsx(
      'space-y-2',
      'w-full',
      className
    )}>
      <label htmlFor={id} className="text-s-medium text-black dark:text-white">
        {label}
        {isRequired && <span className="text-[#E93A6F] text-s-medium">*</span>}
      </label>

      <div className="flex items-start space-x-2 bg-black/[0.02] dark:bg-white/[0.06] rounded-xl py-[14px] px-4">
        <Icon className="stroke-black dark:stroke-white"/>

        {type === 'textarea'
          ? (
            <textarea rows={3} className="bg-transparent w-full focus:outline-none text-s-reguler text-black dark:text-white placeholder:text-black/[0.32] dark:placeholder:text-white/[0.32]" value={value} onChange={onChange} placeholder={placeholder}></textarea>
          )
          : (
            <input id={id} className="w-full bg-transparent focus:outline-none text-s-reguler text-black dark:text-white placeholder:text-black/[0.32] dark:placeholder:text-white/[0.32]" type={type} value={value} onChange={onChange} placeholder={placeholder}/>
          )}
      </div>
    </div>
  )
}

Form.propTypes = {
  custom: PropTypes.object,
  variants: PropTypes.object,
  onSend: PropTypes.func
}

FormGroup.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default GetInTouch
