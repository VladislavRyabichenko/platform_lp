import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { Button } from 'components/common'

import Exports from 'assets/icon/Export'

import BigBlog from './BigBlog'
import SmallBlog from './SmallBlog'

import { GradientInsight } from '../BgGradient'
import useResponsive from 'utils/useResponsive'

import { StaggerChildren, FadeIn } from 'animation'

const Insights = () => {
  const { md } = useResponsive()
  const scrolToTop = () => {
    return window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <motion.section
      custom={{ staggerChildren: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -250px 0px' }}
      variants={StaggerChildren}
      className={clsx(
        'relative',
        'py-10 md:py-0 lg:py-20',
        'px-6 md:px-10 lg:px-[140px]',
        'max-w-[1440px]',
        'm-auto left-0 right-0'
      )}>
      <GradientInsight className="absolute bottom-0 right-0 z-[-1] overflow-visible" />
      <div className={clsx(
        'flex justify-between',
        'items-start md:items-center',
        'space-y-4 lg:space-y-0',
        'flex-col md:flex-row',
        'mb-8 md:mb-12'
      )}>
        <motion.h2
          custom={{ yStart: -100, duration: 1 }}
          variants={FadeIn}
          className="h4-bold md:h2-bold tracking-[0.5px] text-[#060721] dark:text-white w-[300px] md:w-[530px]"
        >
          Insights and resources for trading
        </motion.h2>

        <Link to="/blog" onClick={scrolToTop} >
          <Button
            custom={{ yStart: -75, duration: 0.75 }}
            variants={FadeIn}
            className={clsx(
              'bg-primary-500 rounded-xl w-fit h-fit text-s-bold text-white',
              'p-3 md:py-[18px] md:px-8'
            )}
          >
            <p>Explore More</p>
            <Exports/>
          </Button>
        </Link>
      </div>

      <div className={clsx(
        'flex items-start',
        'gap-y-6 md:gap-8',
        'flex-col lg:flex-row'
      )}>
        <BigBlog
          custom={{ yStart: -60, duration: 0.7 }}
          variants={FadeIn}
        />

        <div className={clsx(
          'flex',
          'flex-col md:flex-row lg:flex-col',
          'justify-between',
          'w-full lg:max-w-[564px]',
          'gap-y-6 md:gap-8'
        )}>
          <SmallBlog
            custom={{ yStart: -55, duration: 0.65 }}
            variants={FadeIn}
            blogImage={{
              lg: require('assets/img/insight/recent-post/blog-2/blog-lg.png'),
              md: require('assets/img/insight/recent-post/blog-2/blog-md.png'),
              sm: require('assets/img/insight/recent-post/blog-2/blog.png')
            }}
            text={
              md
                ? 'From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle'
                : 'From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle'.slice(0, 71) + '...'
            }
          />
          <SmallBlog
            custom={{ yStart: -50, duration: 0.5 }}
            variants={FadeIn}
            blogImage={{
              lg: require('assets/img/insight/recent-post/blog-3/blog-lg.png'),
              md: require('assets/img/insight/recent-post/blog-3/blog-md.png'),
              sm: require('assets/img/insight/recent-post/blog-3/blog.png')
            }}
            text={
              md
                ? 'Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained'
                : 'Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained'.slice(0, 65) + '...'
            }
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Insights
