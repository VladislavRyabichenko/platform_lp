import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import TableOfContents from './TableOfContent'

import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Seventh from './Seventh'
import Eighth from './Eighth'
import Ninth from './Ninth'
import Tenth from './Tenth'
import Eleventh from './Eleventh'
import Twelfth from './Twelfth'

import DotsBackground from 'components/DotsBackground'
import BgGradient from './BgGradient'
import { FadeIn } from 'animation'

const Privacy = () => {
  return (
    <div>
      <DotsBackground folder="policy/privacy" className="absolute top-0 left-0 z-[-1] w-full h-auto"/>
      <BgGradient className="absolute m-auto top-0 right-0 left-0 z-[-1] w-full h-auto overflow-visible"/>
      <motion.h3
        custom={{ duration: 1 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={FadeIn}
        className="h3-bold md:h2-bold tracking-[0.5] text-black dark:text-white w-fit m-auto left-0 right-0"
      >Privacy Policy</motion.h3>

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
        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56]">Thank you for choosing to be part of our community at TRYNDx Limited ("Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at support@tryndx.com.</p>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56]">When you visit our website http://tryndx.com (the "Website"), use our mobile application, as the case may be (the "App") and more generally, use any of our services (the "Services", which include the Website and App), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately</p>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56]">This privacy notice applies to all information collected through our Services (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events.</p>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56]">Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</p>

        <TableOfContents/>

        <div className="space-y-8">
          <First/>
          <Second/>
          <Third/>
          <Fourth/>
          <Fifth/>
          <Sixth/>
          <Seventh/>
          <Eighth/>
          <Ninth/>
          <Tenth/>
          <Eleventh/>
          <Twelfth/>
        </div>
      </motion.div>
    </div>
  )
}

export default Privacy
