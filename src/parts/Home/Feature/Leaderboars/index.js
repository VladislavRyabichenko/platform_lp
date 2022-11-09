import clsx from 'clsx'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import React, { useContext } from 'react'

import { GradientLeaderboards } from '../../BgGradient'

import { ThemeContext } from 'context/ThemeContext'
import CompetitivePerformance from 'assets/svg/leaderbords/CompetitivePerformance'
import TacticalComparison from 'assets/svg/leaderbords/TacticalComparison'
import ImprovePerformance from 'assets/svg/leaderbords/ImprovePerformance'
import OptimizePortfolio from 'assets/svg/leaderbords/OptimizePortfolio'

import { StaggerChildren, FadeIn } from 'animation'

const Leaderbords = () => {
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
        'px-6 md:px-10 xl:pl-[140px] xl:pr-0 2xl:pl-0',
        'justify-between',
        'flex-col-reverse xl:flex-row',
        'max-w-[1440px]',
        'w-full',
        'm-auto left-0 right-0'
      )}
    >
      <GradientLeaderboards className="absolute top-0 z-[-1] overflow-visible"/>
      <div className="w-full lg:w-[564px] space-y-4 md:space-y-8">
        <div className="space-y-4" >
          <motion.h2
            custom={{ yStart: -75, duration: 1.25 }}
            variants={FadeIn}
            className="h4-bold md:h2-bold text-[#060721] dark:text-white tracking-[0.5px]"
          >Leaderboards</motion.h2>
          <motion.p
            custom={{ yStart: -75, duration: 1.0 }}
            variants={FadeIn}
            className="text-s-reguler md:text-m-reguler text-[#060721]/60 dark:text-white/[0.56] w-full lg:w-[479px]"
          >TRYNDx Leaderboards lets you see where you stand in the hierarchy, giving you a peek at what you need to do to reach the top. Refine your strategy with real-time insights from verified top scorers and effortlessly rise among the ranks</motion.p>
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
              className="flex items-center w-fit rounded-full" icon={CompetitivePerformance} text="Competitive performance"
            />
            <Badge
              custom={{ yStart: -60, duration: 1.0 }}
              variants={FadeIn}
              className="flex items-center w-fit rounded-full" icon={TacticalComparison} text="Tactical trade comparisons"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge
              custom={{ yStart: -30, duration: 0.9 }}
              variants={FadeIn}
              className="flex items-center w-fit rounded-full" icon={ImprovePerformance} text="Improve performance"
            />
            <Badge
              custom={{ yStart: -30, duration: 0.8 }}
              variants={FadeIn}
              className="flex items-center w-fit rounded-full" icon={OptimizePortfolio} text="Optimize portfolio"
            />
          </div>
        </motion.div>

      </div>

      <motion.div
        custom={{ xStart: 100, duration: 0.9 }}
        variants={FadeIn}
        className="max-w-[636px] 2xl:max-w-full mb-8 md:mb-12 xl:mb-0"
      >
        <img className="w-full md:w-fit max-w-[744px]" src={require(`assets/img/home/feature/${theme}/leaderboard.png`)} alt="" />
      </motion.div>

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

export default Leaderbords
