import clsx from 'clsx'
import React from 'react'
import CardItem from './CardItem'
import { motion } from 'framer-motion'

import Encrypted from 'assets/logo/security/encrypt.png'
import RegularAudit from 'assets/logo/security/regular-audits.png'
import AssuredPrivacy from 'assets/logo/security/assured-privacy.png'
import SafetyGuarantee from 'assets/logo/security/safety-guarantee.png'
import CloudInfrastructure from 'assets/logo/security/cloud-infrastructure.png'
import Question from 'assets/logo/security/question.png'

import { StaggerChildren, FadeIn } from 'animation'

const Contents = () => {
  const features = [
    {
      logo: Encrypted,
      title: 'Encrypted data',
      description: 'With TRYNDx, you never have to worry about data leaks. The site high-end encryption tools to ensure that your data can’t be accessed by malicious third parties. All TRYNDx users, partner institutions, and data providers are secured with high-level encryption to make sure that there’s no weak link to TRYNDx’s protection.'
    },
    {
      logo: RegularAudit,
      title: 'Regular Audits',
      description: 'Site security is one of TRYNDx’s primary concerns. Regular audits are conducted by independent institutions to test the strength and security of all our systems. Together, they determine potential risks, simulate common forms of attack, and find out if there are any current vulnerabilities to give our customers the ultimate digital protection at all times.'
    },
    {
      logo: AssuredPrivacy,
      title: 'Assured Privacy',
      description: 'TRYNDx never stores any of your data to minimize potential vulnerabilities. Secure verification systems are in place to make sure that users truly are who they say they are, and all transactional data on the platform are secured with the highest level of encryption available.'
    },
    {
      logo: SafetyGuarantee,
      title: 'Safety Guarantee',
      description: 'TRYNDx never touches any of your money directly, but we do keep a tight ship when maintaining our networks to ensure maximum security. From financials, data, and customer-facing systems, privacy audits and third-party vulnerability assessments are routinely conducted.'
    },
    {
      logo: CloudInfrastructure,
      title: `Cloud
      Infrastructure`,
      description: 'TRYNDx utilizes the newest in infrastructure security to ensure that our cloud systems are protected from any attacks. The Cloud powers many of our customer-facing systems, and our customers benefit from the continuous security iterations and performance updates of this high-end technology.'
    },
    {
      logo: Question,
      title: 'Any questions?',
      information: <>We’ll do all we can to make you feel safe. Reach out to us at <span className="text-s-medium text-black dark:text-white">security@tryndx.com</span> for any inquiries and concerns</>,
      isButton: true
    }
  ]

  return (
    <section className={clsx(
      'px-6 md:px-10 xl:px-[140px]',
      'mb-12 md:mb-14 lg:mb-[96px]',
      'max-w-[1440px]',
      'm-auto left-0 right-0'
    )}>
      <motion.div
        custom={{ staggerChildren: 0.3, delayChildren: 0.8 }}
        variants={StaggerChildren}
        initial="hidden"
        animate="visible"
        className={clsx(
          'flex',
          'flex-wrap',
          'justify-center',
          'gap-x-6 lg:gap-x-8',
          'gap-y-6 md:gap-y-8 lg:gap-y-10'
        )}
      >
        {features.map((feature, index) => {
          return (
            <CardItem
              key={index}
              custom={{ yStart: -50, duration: 0.75 }}
              variants={FadeIn}
              logo={feature.logo}
              title={feature.title}
              description={feature.description}
              information={feature.information}
              isButton={feature.isButton}
            />
          )
        })}
      </motion.div>
    </section>
  )
}

export default Contents
