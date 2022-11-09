import clsx from 'clsx'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'

import { GradientTraderCommunity } from '../../BgGradient'

import { ThemeContext } from 'context/ThemeContext'
import ShareIdeas from 'assets/svg/trader-community/ShareIdeas'
import RaiseKnowledge from 'assets/svg/trader-community/RaiseKnowledge'
import FollowAndTrack from 'assets/svg/trader-community/FollowAndTrack'
import EngageCommunity from 'assets/svg/trader-community/EngageCommunity'

import { StaggerChildren, FadeIn } from 'animation'

const TraderCommunity = () => {
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
        'px-6 md:px-10 xl:pr-[118px] xl:pl-0 2xl:pr-0',
        'w-full'
      )}
    >
      <img
        className={clsx(
          'hidden xl:block',
          'w-full absolute top-0 z-[-1] m-auto left-0 right-0'
        )}
        src={require(`assets/dots-background/home/trader-community/${theme}.png`)}
        alt=""
      />

      <div className={clsx(
        'flex',
        'justify-between',
        'flex-col xl:flex-row',
        'xl:items-center',
        'max-w-[1440px]',
        'm-auto left-0 right-0'
      )}>
        <GradientTraderCommunity className="absolute top-0 z-[-1] overflow-visible" />
        <motion.div
          custom={{ xStart: -100, duration: 0.9 }}
          variants={FadeIn}
          className="max-w-[606px] 2xl:max-w-full mb-8 md:mb-12 xl:mb-0 relative"
        >
          <img className="w-full md:w-fit max-w-[744px] xl:right-[138px] 2xl:right-0 relative" src={require(`assets/img/home/feature/${theme}/traders-community.png`)} alt="" />
        </motion.div>

        <div className="w-full lg:w-[586px] space-y-4 md:space-y-8">
          <div className="space-y-4" >
            <motion.h2
              custom={{ yStart: -75, duration: 1.25 }}
              variants={FadeIn}
              className="h4-bold md:h2-bold text-[#060721] dark:text-white tracking-[0.5px]"
            >Trader's Community</motion.h2>
            <motion.p
              custom={{ yStart: -75, duration: 1.0 }}
              variants={FadeIn}
              className="text-s-reguler md:text-m-reguler text-[#060721]/60 dark:text-white/[0.56] w-full lg:w-[479px]"
            >The TRYNDx Trader’s Community is a healthy, vibrant place to get support and inspiration. Find out what your fellow traders are accomplishing, engage with your peers, share your ideas and let them know about your biggest wins. Be part of something exceptional with the Trader’s Community</motion.p>
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
                className="flex items-center w-fit rounded-full" icon={ShareIdeas} text="Share your ideas"
              />
              <Badge
                custom={{ yStart: -60, duration: 1.0 }}
                variants={FadeIn}
                className="flex items-center w-fit rounded-full" icon={RaiseKnowledge} text="Raise your knowledge and learn"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge
                custom={{ yStart: -30, duration: 0.9 }}
                variants={FadeIn}
                className="flex items-center w-fit rounded-full" icon={FollowAndTrack} text="Follow and track performance"
              />
              <Badge
                custom={{ yStart: -30, duration: 0.8 }}
                variants={FadeIn}
                className="flex items-center w-fit rounded-full" icon={EngageCommunity} text="Engage with your community"
              />
            </div>
          </motion.div>

        </div>
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
      <Icon className="fill-black/[0.88] dark:fill-white/80"/>
      <p className="text-s-medium md:text-m-medium text-[#060721]/[0.88] dark:text-white/80">{text}</p>
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

export default TraderCommunity
