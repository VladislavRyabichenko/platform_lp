import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import CardItem from './CardItem'

import Tracking from 'assets/logo/features/tracking.png'
import Visualization from 'assets/logo/features/visualization.png'
import TailoredAnalytics from 'assets/logo/features/tailored-analytics.png'
import RealtimeInsight from 'assets/logo/features/real-time-insight.png'
import EasyGoalSetting from 'assets/logo/features/easy-goal-setting.png'
import Mentorship from 'assets/logo/features/one-on-one-mentorships.png'
import ExpertTrader from 'assets/logo/features/expert-trader-subscriptions.png'
import Leaderboards from 'assets/logo/features/verified-leaderboards.png'
import ActiveTrader from 'assets/logo/features/active-trader-community.png'

import BgGradient from './BgGradient'

import { StaggerChildren, FadeIn } from 'animation'

const Contents = () => {
  const features = [
    {
      logo: Tracking,
      title: 'Trade Tracking',
      description: 'What can’t be measured can’t be controlled. TRYNDx provides full control by giving you a bird’s eye view of all your trades, allowing you to maintain your edge'
    },
    {
      logo: Visualization,
      title: 'Strategy Visualization',
      description: 'Optimized for visual learners, TRYNDx has a powerful visualization toolset that minimizes research time and helps you better plot and track your strategies'
    },
    {
      logo: TailoredAnalytics,
      title: 'Tailored Analytics and Reports',
      description: 'Never rely on your intuition again. TRYNDx’s cutting-edge analytical tools to derive lightning-fast and data-driven metrics'
    },
    {
      logo: RealtimeInsight,
      title: 'Real-time insight',
      description: 'Never miss a beat. Get hands-on, real-time market data wherever you are, whenever you need it'
    },
    {
      logo: EasyGoalSetting,
      title: 'Easy Goal-Setting',
      description: 'TRYNDx helps you commit to your goals. Set your milestones, track your progress, and execute and monitor your trades the right way with TRYNDx’s trade journal features'
    },
    {
      logo: Mentorship,
      title: 'One-on-One Mentorships',
      description: 'With TRYNDx, you won’t ever have to learn things alone. Get quality mentorship from professionals and long-term successful traders to become a better trader going forward'
    },
    {
      logo: ExpertTrader,
      title: 'Expert Trader\'s Subscriptions',
      description: ' Be motivated and inspired by your TRYNDx community. Follow and subscribe to verified Expert Traders on their way to success and use the knowledge you gain in your own journey'
    },
    {
      logo: Leaderboards,
      title: 'Verified Leaderboards',
      description: 'TRYNDx’s trading journal will give you everything you need to excel – connect your Stock Broker account, climb the leaderboards and take your place at the top'
    },
    {
      logo: ActiveTrader,
      title: 'Active Trader’s Community',
      description: 'Never trade alone. Stay updated with trends, gather a following, know how everyone else is trading, share and gain knowledge and compare notes with our vibrant Trader’s Community Reply'
    }
  ]

  return (
    <section className={clsx(
      'relative',
      'px-6 md:px-10 xl:px-[140px]',
      'mb-14 md:mb-20 lg:mb-[120px]',
      'max-w-[1440px]',
      'm-auto left-0 right-0'
    )}>
      <BgGradient className="absolute top-0 z-[-1] w-full h-auto m-auto left-0 right-0 overflow-visible"/>

      <motion.div
        custom={{ staggerChildren: 0.5, delayChildren: 1.5 }}
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
              index={index}
              custom={{ yStart: -70, duration: 1 }}
              variants={FadeIn}
              key={index} logo={feature.logo} title={feature.title} description={feature.description}
            />
          )
        })}
      </motion.div>
    </section>
  )
}

export default Contents
