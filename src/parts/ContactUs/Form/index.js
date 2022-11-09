import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Profile from 'assets/icon/Profile'
import Mail from 'assets/icon/Sms'
import Phone from 'assets/icon/Call'
import Company from 'assets/icon/Buliding'
import Message from 'assets/icon/DocumentText'

// import Send from 'assets/icon/send.svg'

import InputGroup from './InputGroup'
import { Button } from 'components/common'

import { FadeInDelay } from 'animation'

const Form = () => {
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
    <section className={clsx(
      'mt-10 md:mt-14 lg:mt-12',
      'px-6 md:px-10 lg:px-0',
      'mb-[76px] lg:mb-[100px]'
    )}>
      <motion.form
        custom={{ yStart: -35, duration: 1, delay: 0.65 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeInDelay}
        className={clsx(
          'w-full lg:w-[762px] bg-white/[0.56] dark:bg-white/[0.06] rounded-lg',
          'p-4 md:px-10',
          'md:py-8 lg:py-12',
          'space-y-4 md:space-y-6',
          'backdrop-filter backdrop-blur-[20px]',
          'm-auto left-0 right-0'
        )}
      >
        <div className={clsx(
          'w-full',
          'flex',
          'flex-col md:flex-row',
          'justify-between',
          'gap-y-4 md:gap-y-6',
          'gap-x-6'
        )}>
          <InputGroup id="full-name" type="text" icon={Profile} label="Full Name" placeholder="Full name"
            value={contactForm.fullname}
            onChange={(e) => handleContactForm({ fullname: e.target.value })}
          />
          <InputGroup id="email-address" type="email" icon={Mail} label="Email Address" placeholder="Email address"
            value={contactForm.email}
            onChange={(e) => handleContactForm({ email: e.target.value })}
          />
        </div>

        <div className={clsx(
          'w-full',
          'flex',
          'flex-col md:flex-row',
          'justify-between',
          'gap-y-4 md:gap-y-6',
          'gap-x-6'
        )}>
          <InputGroup id="phone-number" type="number" icon={Phone} label="Phone Number" placeholder="(308) 555-0121" pattern={/^[0-9]*$/}
            value={contactForm.phone}
            onChange={(e) => handleContactForm({ phone: e.target.value })}
          />
          <InputGroup id="company" type="text" icon={Company} label="Company" placeholder="Your company name..."
            value={contactForm.company}
            onChange={(e) => handleContactForm({ company: e.target.value })}
          />
        </div>

        <InputGroup id="message" type="textarea" icon={Message} label="Message" placeholder="Please type your message here..."
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
    </section>
  )
}

export default Form
