import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import Sms from 'assets/icon/Sms'
import { Button, Input } from 'components/common'

import { StaggerChildren, FadeIn } from 'animation'

const SubsriceForm = () => {
  return (
    <motion.div
      custom={{ staggerChildren: 0.4, delayChildren: 1 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StaggerChildren}
      className={clsx(
        'w-fit m-auto left-0 right-0',
        'mb-10 md:mb-[84px]',
        'px-6 md:px-0'
      )}
    >
      <form className="flex items-center gap-x-4 flex-wrap gap-y-4">
        <motion.div
          custom={{ yStart: -50, duration: 1 }}
          variants={FadeIn}
          className={clsx(
            'flex gap-x-2 px-4 py-[14px] bg-black/[0.04] dark:bg-white/[0.06] rounded-xl',
            'w-full sm:w-[329px]'
          )}
        >
          <Sms className="stroke-black dark:stroke-white"/>
          <Input className="text-s-reguler text-black placeholder:text-black/[0.32] dark:text-white dark:placeholder:text-white/[0.32]" type="email" placeholder="Enter your email"/>
        </motion.div>

        <Button
          custom={{ yStart: -35, duration: 1 }}
          variants={FadeIn}
          className={clsx(
            'bg-[#2160DC] rounded-xl h-fit px-7 py-[14px]',
            'w-full sm:w-fit',
            'text-white'
          )}
        >
          Subscribe
        </Button>
      </form>
      <motion.p
        custom={{ xStart: -35, duration: 0.75 }}
        variants={FadeIn}
        className="text-s-reguler tracking-[0.2] text-black/60 dark:text-white/[0.32] mt-2"
      >
        We care about your data in our <span className="font-bold">privacy policy</span>
      </motion.p>
    </motion.div>
  )
}

export default SubsriceForm
