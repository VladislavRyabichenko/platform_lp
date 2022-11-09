import clsx from 'clsx'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'

import { GradientMentor } from '../../BgGradient'

import { ThemeContext } from 'context/ThemeContext'

import Guidance from 'assets/svg/mentor/Guidance'
import CustomizeSolution from 'assets/svg/mentor/CustomizeSolution'
import ReviewAndOptimize from 'assets/svg/mentor/ReviewAndOptimize'
import Mentorship from 'assets/svg/mentor/Mentorship'

import { StaggerChildren, FadeIn } from 'animation'

const Mentor = () => {
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
        'py-10 md:py-20',
        'px-6 md:px-10 xl:pl-[140px] xl:pr-0 2xl:pl-0',
        'w-full'
      )}
    >
      <img
        className={clsx(
          'hidden xl:block',
          'w-full absolute top-[-87px] dark:top-[-93px] z-[-1] m-auto left-0 right-0'
        )}
        src={require(`assets/dots-background/home/mentor/${theme}.png`)}
        alt=""
      />

      <div className={clsx(
        'flex',
        'justify-between',
        'flex-col-reverse xl:flex-row',
        'xl:items-center',
        'max-w-[1440px]',
        'm-auto left-0 right-0'
      )}>
        <GradientMentor className="absolute top-0 z-[-1] overflow-visible" />
        <div className="w-full lg:w-[564px] space-y-8">
          <div className="space-y-4" >
            <motion.h2
              custom={{ yStart: -75, duration: 1.25 }}
              variants={FadeIn}
              className="h4-bold md:h2-bold text-[#060721] dark:text-white tracking-[0.5px]"
            >Mentors Consultations</motion.h2>
            <motion.p
              custom={{ yStart: -75, duration: 1.0 }}
              variants={FadeIn}
              className="text-s-reguler md:text-m-reguler text-[#060721]/60 dark:text-white/[0.56] w-full lg:w-[479px]"
            >Have expert, experienced guidance at your disposal with the TRYNDx Mentorship feature. Mentors can help you optimize your personal strategy through in-depth, one-on-one consultation. With our Mentor Consultations, you can go on your trading journey with only the best strategies to guide you</motion.p>
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
                className="flex items-center w-fit rounded-full" icon={Guidance} text="Guidance from Exp. Mentors"
              />
              <Badge
                custom={{ yStart: -60, duration: 1.0 }}
                variants={FadeIn}
                className="flex items-center w-fit rounded-full" icon={CustomizeSolution} text="Customized solutions"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge
                custom={{ yStart: -30, duration: 0.9 }}
                variants={FadeIn}
                className="flex items-center w-fit rounded-full" icon={ReviewAndOptimize} text="Review and Optimize Profit Streams"
              />
              <Badge
                custom={{ yStart: -30, duration: 0.8 }}
                variants={FadeIn}
                className="flex items-center w-fit rounded-full" icon={Mentorship} text="One-on-one mentorship"
              />
            </div>
          </motion.div>

        </div>

        <motion.div
          custom={{ xStart: 100, duration: 0.9 }}
          variants={FadeIn}
          className="max-w-[696px] 2xl:max-w-full mb-8 md:mb-12 xl:mb-0"
        >
          <img className="w-full md:w-fit max-w-[744px]" src={require(`assets/img/home/feature/${theme}/mentor.png`)} alt="" />
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

export default Mentor
