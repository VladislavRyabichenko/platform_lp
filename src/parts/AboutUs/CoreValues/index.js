import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import BgGradient from './BgGradient'

import { FadeIn, StaggerChildren } from 'animation'

const CoreValues = () => {
  return (
    <motion.section
      custom={{ staggerChildren: 0.35 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -250px 0px' }}
      variants={StaggerChildren}
      className={clsx(
        'max-w-[1160px] m-auto left-0 right-0',
        'mb-14 md:mb-20 lg:mb-[120px]',
        'px-6 md:px-10 lg:px-0'
      )}
    >
      <motion.h3
        custom={{ yStart: -75, duration: 1 }}
        variants={FadeIn}
        className="h4-bold md:h3-bold text-black dark:text-white text-center mb-8 md:mb-10"
      >Our Core Values and Philosophy</motion.h3>

      <motion.div
        custom={{ staggerChildren: 0.4 }}
        variants={StaggerChildren}
        className={clsx(
          'relative',
          'grid',
          'gap-6 md:gap-8',
          'grid-cols-1 md:grid-cols-2'
        )}
      >
        <BgGradient className="absolute right-0 top-0 z-[-1] overflow-visible"/>

        <CoreItem
          custom={{ yStart: -50, duration: 1 }}
          variants={FadeIn}
          img='img-1'
          title="We Never Stand Still"
          description="We’re constantly developing, testing, and improving to make sure we’re delivering the best experience to our partners and clients. We never settle because we believe there’s always an opportunity to do better."
        />
        <CoreItem
          custom={{ yStart: -50, duration: 0.9 }}
          variants={FadeIn}
          img='img-2'
          title="It’s New Or Nothing"
          description='Thinking differently is in our DNA. We don’t say &quot;We don&#39;t know how&quot; or &quot;We can&#39;t&quot;. When given a challenge, we overcome it. We know the comfort zone is where things go to die, so we constantly reinvent ourselves to stay on top of our game.'
        />
        <CoreItem
          custom={{ yStart: -50, duration: 0.8 }}
          variants={FadeIn}
          img='img-3'
          title="Quality Above All Else"
          description="Our clients and partners trust us to do our work and we take that seriously. Our team will overcome obstacles, find solutions, and deliver exceptional results. We create quality products and services that add value every step of the way. The quality of our work comes above all else."
        />
        <CoreItem
          custom={{ yStart: -50, duration: 0.7 }}
          variants={FadeIn}
          img='img-4'
          title={`Passion in Everything
          We Do`}
          description="We take pride in our work and bring our A-game to all of our clients and
          partners. We are passionate about our work because we truly believe in what we do."
        />
      </motion.div>
    </motion.section>
  )
}

const CoreItem = ({ custom, variants, img, title, description }) => {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      className={clsx(
        'bg-black/[0.04] dark:bg-white/[0.06] rounded-2xl',
        'min-h-[288px] md:min-h-[332px] lg:min-h-[286px]',
        'py-6 md:py-8',
        'px-4 md:px-6'
      )}
    >
      <img className="w-14 h-14 m-auto left-0 right-0" src={require(`assets/img/core-values/${img}.png`)}/>

      <div className="mt-6">
        <h4 className={clsx(
          'text-l-bold md:h4-bold text-black dark:text-white text-center mb-3',
          'whitespace-pre-line lg:whitespace-normal'
        )}>{title}</h4>
        <p className={clsx(
          'text-s-reguler text-black/60 dark:text-white/[0.56] text-center'
        )}>{description}</p>
      </div>
    </motion.div>
  )
}

CoreItem.propTypes = {
  custom: PropTypes.object,
  variants: PropTypes.object,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default CoreValues
