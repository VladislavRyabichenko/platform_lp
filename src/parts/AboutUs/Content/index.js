import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import BgGradient from './BgGradient'

import { FadeInDelay } from 'animation'

const Content = () => {
  return (
    <section className={clsx(
      'relative',
      'w-fit m-auto left-0 right-0',
      'mt-4 lg:mt-10',
      'mb-14 lg:mb-[64px]',
      'px-6 md:px-10'
    )}>
      <motion.div
        custom={{ yStart: -35, duration: 1, delay: 0.65 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeInDelay}
        className={clsx(
          'bg-black/[0.04] dark:bg-white/[0.06] rounded-xl',
          'px-6 md:px-8 lg:px-14',
          'py-8 md:py-10 lg:py-12'
        )}
      >
        <BgGradient className="absolute right-0 top-0 z-[-1] overflow-visible"/>

        <div className="lg:max-w-[1048px]">
          <p className="text-m-reguler text-black/[0.76] dark:text-white/[0.56] whitespace-pre-line text-center">
            {`If trading is war, then an intelligent trading journal is the best weapon you can have in your arsenal.

        Crunching the numbers, analyzing your stocks, and assessing your risks are some of the most tedious yet critical parts of trading.

        But not with a trading journal like TRYNDx. Whether you want cutting-edge analytical tools or a network of like-minded peers, traders and mentors to keep you motivated, TRYNDx has it all.

        Rise through the trader's community, leaderboards, expert traders and mentors.

        Increase your profits with cutting-edge analytical metrics. Bring your trades to life. Learn from the very best. Connect with your community.

        This platform offers everything you need as a trader all in one place.

        Sharpen your trades today with TRYNDx trading journal and scale your results.`}
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Content
