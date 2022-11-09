import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import Ornament from './Ornament'
import AdvantageItem from './AdvantageItem'

import Trade from 'assets/svg/advantage/trade.svg'
import Visualize from 'assets/svg/advantage/visualize.svg'
import Accelerate from 'assets/svg/advantage/accelerate.svg'

import { StaggerChildren, FadeIn } from 'animation'

const Advantage = () => {
  return (
    <motion.section
      custom={{ }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -250px 0px' }}
      variants={StaggerChildren}
      className="relative"
    >
      <Ornament className="absolute top-[99px] lg:bottom-3 m-auto right-0 left-0 z-[-1]"/>
      <div
        className={clsx(
          'space-y-10 md:space-y-12',
          'pt-10 md:pt-20',
          'pb-10 md:pb-20 lg:pb-[132px]',
          'px-6 md:px-10 tablet:px-0'
        )}
      >
        <motion.h3
          custom={{ yStart: -75, duration: 1.5 }}
          variants={FadeIn}
          className="h4-bold md:h3-bold text-[#060721] dark:text-white w-full md:w-[564px] m-auto left-0 right-0 text-center"
        >
          <span style={{
            background: 'linear-gradient(225deg, #0C5DFF 0%, #8FE8FA 100%)',
            backgroundSize: '300px 150px',
            backgroundPosition: 'left',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Boost</span> Your Trading Performance With TRYNDx
        </motion.h3>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 justify-center">
          <AdvantageItem
            custom={{ yStart: -35, duration: 1.25 }}
            variants={FadeIn}
            index={1} icon={Trade} title="All Trades in One Place" desc="Historical trades, portfolio holdings, trading metrics – you can find everything you need on your optimized dashboard within minutes."
          />

          <AdvantageItem
            custom={{ yStart: -30, duration: 1 }}
            variants={FadeIn}
            index={2} icon={Visualize} title="Visualize Your Strategy" desc="With all the relevant data in one place, it’s time to bring your trading strategy to life with TRYNDx’s comprehensive statistical tools."
          />

          <AdvantageItem
            custom={{ yStart: -25, duration: 0.75 }}
            variants={FadeIn}
            className="block md:hidden xl:block" index={3} icon={Accelerate} title="Accelerate Performance" desc="TRYNDx can help you greatly improve your trades, get further inspiration from Expert Traders, or consult with Mentors in in-depth one-on-one sessions"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Advantage
