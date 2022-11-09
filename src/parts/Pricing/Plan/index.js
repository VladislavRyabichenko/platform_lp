import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import CardPrice from './CardPrice'

import ProImg from 'assets/logo/pricing-plan/pro.png'
import PremiumImg from 'assets/logo/pricing-plan/premium.png'
import PremiumPlusImg from 'assets/logo/pricing-plan/premium-plus.png'

import { StaggerChildren, FadeIn } from 'animation'

const Plan = () => {
  return (
    <section className={clsx(
      'mt-10',
      'px-6 md:px-[40px] xl:px-[140px]',
      'max-w-[1440px]',
      'm-auto left-0 right-0'
    )}>
      <motion.div
        custom={{ staggerChildren: 0.4, delayChildren: 1.25 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={StaggerChildren}
        className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-6"
      >
        <CardPrice
          id="pro"
          title="Pro"
          bgLabel="bg-[#F2B007]"
          label="Free 7 days trial"
          logo={ProImg}
          price='$19.99'
          priceLabel="Billed Monthly"
          custom={{ yStart: -70, duration: 1 }}
          variants={FadeIn}
        />
        <CardPrice
          id="premium"
          title="Premium"
          bgLabel="bg-[#5AC994]"
          label="Free 7 days trial"
          logo={PremiumImg}
          price='$29.99'
          priceLabel="Billed Monthly"
          custom={{ yStart: -60, duration: 0.9 }}
          variants={FadeIn}
        />
        <CardPrice
          id="premium-plus"
          title="Premium+"
          bgLabel="bg-[white]/[0.2]"
          label="Save 2 Months of Free Subscriptions"
          logo={PremiumPlusImg}
          bgCard="bg-[#2160DC]"
          price='$16.67'
          priceLabel="Billed Annually"
          custom={{ yStart: -50, duration: 0.8 }}
          variants={FadeIn}
        />
      </motion.div>
    </section>
  )
}

export default Plan
