import clsx from 'clsx'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'

import { GradientExpertTrader } from '../../BgGradient'

import { ThemeContext } from 'context/ThemeContext'

import Learn from 'assets/svg/expert-trader/Learn'
import QualifedInstruction from 'assets/svg/expert-trader/QualifedInstruction'
import Track from 'assets/svg/expert-trader/Track'
import VerifiedSecurity from 'assets/svg/expert-trader/VerifiedSecurity'

import { StaggerChildren, FadeIn } from 'animation'

const ExpertTrader = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <motion.section
      custom={{ staggerChildren: 0.35 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -250px 0px' }}
      variants={StaggerChildren}
      className={clsx(
        'relative',
        'flex',
        'py-10 md:py-20',
        'xl:items-center',
        'px-6 md:px-10 xl:pr-[140px] xl:pl-0 2xl:pr-0',
        'justify-between',
        'flex-col xl:flex-row',
        'max-w-[1440px]',
        'w-full',
        'm-auto left-0 right-0'
      )}
    >
      <GradientExpertTrader className="absolute top-0 z-[-1] overflow-visible" />
      <motion.div
        custom={{ xStart: -100, duration: 0.9 }}
        variants={FadeIn}
        className="max-w-[613px] 2xl:max-w-full mb-8 md:mb-12 xl:mb-0 relative"
      >
        <img className="w-full md:w-fit max-w-[744px] xl:right-[131px] 2xl:right-0 relative" src={require(`assets/img/home/feature/${theme}/expert-trader.png`)} alt="" />
      </motion.div>

      <div className="w-full lg:w-[564px] space-y-8">
        <div className="space-y-4" >
          <motion.h2
            custom={{ yStart: -75, duration: 1.25 }}
            variants={FadeIn}
            className="h4-bold md:h2-bold text-[#060721] dark:text-white tracking-[0.5px]"
          >Verified Expert Traders</motion.h2>
          <motion.p
            custom={{ yStart: -75, duration: 1.0 }}
            variants={FadeIn}
            className="text-s-reguler md:text-m-reguler text-[#060721]/60 dark:text-white/[0.56] w-full lg:w-[479px]"
          >Supercharge your trading experience with bonus content available through TRYNDx’s Verified Expert Traders package. Subscribe to receive high-value services such as stock recommendations, trading alerts, and more. Or, become a Verified Expert Trader yourself and serve as a role model to your fellow traders</motion.p>
        </div>

        <motion.div
          custom={{ staggerChildren: 0.25 }}
          variants={StaggerChildren}
          className="space-y-3"
        >
          <div className="flex flex-wrap gap-3">
            <Badge
              custom={{ yStart: -60, duration: 1.1 }}
              variants={FadeIn}
              className="flex items-center w-fit rounded-full" icon={Learn} text="Learn from the best"
            />
            <Badge
              custom={{ yStart: -60, duration: 1.0 }}
              variants={FadeIn}
              className="flex items-center w-fit rounded-full" icon={QualifedInstruction} text="Qualified instruction"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge
              custom={{ yStart: -30, duration: 0.9 }}
              variants={FadeIn}
              className="flex items-center w-fit rounded-full" icon={Track} text="Track, Gain and Scale"
            />
            <Badge
              custom={{ yStart: -30, duration: 0.8 }}
              variants={FadeIn}
              className="flex items-center w-fit rounded-full" icon={VerifiedSecurity} text="Verified for security"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}

const Badge = ({ custom, variants, className, icon: Icon, text }) => {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      className={clsx(
        'h-10',
        'bg-[#060721]/[0.04] dark:bg-white/10',
        'space-x-2',
        'px-4',
        className
      )}
    >
      <Icon className="fill-black/[0.76] dark:fill-white/80"/>
      <p className="text-s-medium md:text-m-medium text-[#060721]/[0.76] dark:text-white/80">{text}</p>
    </motion.div>
  )
}

Badge.propTypes = {
  custom: PropTypes.object,
  variants: PropTypes.object,
  className: PropTypes.string,
  icon: PropTypes.node,
  text: PropTypes.string
}

export default ExpertTrader
