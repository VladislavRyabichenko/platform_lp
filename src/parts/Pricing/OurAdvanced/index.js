import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import Header from './Header'
import AdvantageItem from './AdvancedItem'

import { StaggerChildren, FadeIn } from 'animation'

const OurAdvanced = () => {
  return (
    <section className={clsx(
      'pt-10 md:pt-16 lg:pt-20',
      'pb-[68px] md:pb-[116px] lg:pb-[120px]',
      'max-w-[1440px]',
      'm-auto left-0 right-0',
      'px-6 md:px-10 xl:px-[140px]'
    )}>
      <Header/>

      <motion.div
        custom={{ staggerChildren: 0.25, delayChildren: 1.25 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -50px 0px' }}
        variants={StaggerChildren}
        className={clsx(
          'flex',
          'justify-center',
          'mt-8 xl:mt-14',
          'gap-x-6 xl:gap-x-8',
          'flex-wrap md:flex-nowrap',
          'gap-y-6'
        )}
      >
        <AdvantageItem
          custom={{ yStart: -50, duration: 0.8 }}
          variants={FadeIn}
          logo={require('assets/img/advanced-item/FreeTrial.png')}
          title='7 days free trial with no Credit Card required'
          description='We offer a 7-day free trial on all our packaging'
        />
        <AdvantageItem
          custom={{ yStart: -45, duration: 0.9 }}
          variants={FadeIn}
          logo={require('assets/img/advanced-item/SSL.png')}
          title='SSL Secure Payments'
          description='Protects the sensitive information such as credit card details—by making them private and confidential—from being stolen by malicious users over the internet.'
        />
        <AdvantageItem
          custom={{ yStart: -40, duration: 1 }}
          variants={FadeIn}
          logo={require('assets/img/advanced-item/Payment.png')}
          title='Accepted payment method'
          description={
            <>
            We accept payment methods from various payment methods such as <span className="text-s-bold text-black/[0.88] dark:text-white/[0.88]">Mastercard, Visa, Discover, Paypal, Amex, Apple pay, and Google pay</span>
            </>
          }
        />
      </motion.div>
    </section>
  )
}

export default OurAdvanced
