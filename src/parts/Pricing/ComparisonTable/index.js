import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import ChecklistIcon from 'assets/icon/ChecklistIcon'
import CloseIcon from 'assets/icon/CloseIcon'

import Footer from './Footer'
import Table from './Table'
import CompareGroup from './CompareGroup'

import { dataPricingPlan } from 'data'

import { FadeInDelay } from 'animation'

const ComparisonTable = () => {
  return (
    <section className={clsx(
      'mb-9 divide-y-[1px] divide-black/[0.08] dark:divide-white/[0.2]',
      'mt-20 md:mt-[42px] xl:mt-12',
      'max-w-[1440px]',
      'm-auto left-0 right-0',
      'px-6 md:px-10 xl:px-[124px]'
    )}>
      <motion.div
        custom={{ yStart: -70, duration: 0.65 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        variants={FadeInDelay}
        className="hidden md:block relative overflow-x-auto dark:shadow-md sm:rounded-lg pb-9"
      >
        <Table
          data={dataPricingPlan}
          ChecklistIcon={ChecklistIcon}
          CloseIcon={CloseIcon}
        />
      </motion.div>

      <div className="block md:hidden pb-6 border-none">
        <h4 className="h4-bold text-black dark:text-white mb-8 text-center">Compare Plans</h4>
        <CompareGroup data={dataPricingPlan} />
      </div>

      <Footer/>
    </section>
  )
}

export default ComparisonTable
