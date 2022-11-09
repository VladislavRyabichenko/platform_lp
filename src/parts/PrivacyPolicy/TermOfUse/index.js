import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import {
  Acknowledgment,
  ChangesTermsConditions,
  ContactUs,
  Disclaimer,
  DisputesResolution,
  EuropeUsers,
  GoverningLaw,
  IntellectualProperty,
  InterpretationDefinition,
  LimitationLiability,
  LinksOtherWebsites,
  Promotions,
  SeverabilityWaiver,
  Subscriptions,
  Termination,
  TranslationInterpretation,
  UserAccounts
} from './Content'

import DotsBackground from 'components/DotsBackground'
import BgGradient from './BgGradient'
import { FadeIn } from 'animation'

const TermOfUse = () => {
  return (
    <div>
      <DotsBackground folder="policy/term-of-use" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <BgGradient className="absolute m-auto top-0 right-0 left-0 z-[-1] w-full h-auto overflow-visible"/>
      <motion.h3
        custom={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeIn}
        className="h3-bold md:h2-bold tracking-[0.5] text-black dark:text-white w-fit m-auto left-0 right-0"
      >
        Terms of Use
      </motion.h3>

      <motion.div
        custom={{ yStart: 50, duration: 1 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeIn}
        className={clsx(
          'mt-10 md:mt-14',
          'px-6 md:px-10',
          'py-8 md:py-12',
          'bg-black/[0.02] dark:bg-white/[0.06] rounded-2xl',
          'space-y-6 md:space-y-8'
        )}
      >
        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          <span className="text-s-bold md:text-m-bold">Last updated: May 11, 2022</span>
          {`
          
          Please read these terms and conditions carefully before using Our Service.`}
        </p>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56]">
          By accessing or using the Website you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Website.
        </p>

        <InterpretationDefinition/>
        <Acknowledgment/>
        <Subscriptions/>
        <Promotions/>
        <UserAccounts/>
        <IntellectualProperty/>
        <LinksOtherWebsites/>
        <Termination/>
        <LimitationLiability/>
        <Disclaimer/>
        <GoverningLaw/>
        <DisputesResolution/>
        <EuropeUsers/>
        <SeverabilityWaiver/>
        <TranslationInterpretation/>
        <ChangesTermsConditions/>
        <ContactUs/>
      </motion.div>
    </div>
  )
}

export default TermOfUse
