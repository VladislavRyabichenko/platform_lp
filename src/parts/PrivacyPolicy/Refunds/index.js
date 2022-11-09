import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import DotsBackground from 'components/DotsBackground'
import BgGradient from './BgGradient'
import { FadeIn } from 'animation'

const Refunds = () => {
  return (
    <div>
      <DotsBackground folder="policy/refund" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <BgGradient className="absolute m-auto top-0 right-0 left-0 z-[-1] w-full h-auto overflow-visible"/>
      <motion.h3
        custom={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeIn}
        className="h3-bold md:h2-bold tracking-[0.5] text-black dark:text-white w-fit m-auto left-0 right-0"
      >
        Refund Policy
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
          'bg-black/[0.02] dark:bg-white/[0.06] rounded-2xl space-y-8'
        )}
      >
        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`Thanks for purchasing our services (or subscribing to our services) at [www.tryndx.com] operated by [TRYNDx Limited].

          As TRYNDx provides 7-day trial on all our packaging plans with no Credit Card required, we do not offer any refunds

          If you have any additional questions or would like to inquire, or share your feedback, feel free to contact us at support@tryndx.com`}
        </p>
      </motion.div>
    </div>
  )
}

export default Refunds
