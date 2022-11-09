import clsx from 'clsx'
import React from 'react'
import { motion } from 'framer-motion'

import Header from './Header'
import BigBlog from './BigBlog'
import SmallBlog from './SmallBlog'

// import BlogImage2 from 'assets/img/insight/recent-post/blog-2/blog.png'
// import BlogImage3 from 'assets/img/insight/recent-post/blog-3/blog.png'

import useResponsive from 'utils/useResponsive'

import { StaggerChildren, FadeIn } from 'animation'

const RecentPost = () => {
  const { md } = useResponsive()

  return (
    <section className={clsx(
      'relative mb-8 md:mb-[72px]',
      'px-6 md:px-10 xl:px-[140px]',
      'max-w-[1440px]',
      'm-auto left-0 right-0'
    )}>
      <Header/>

      <motion.div
        custom={{ staggerChildren: 0.4, delayChildren: 3.75 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={StaggerChildren}
        className={clsx(
          'flex items-start',
          'gap-y-6 md:gap-8',
          'flex-col lg:flex-row',
          'mt-6'
        )}
      >
        <BigBlog
          custom={{ yStart: -35, duration: 0.8 }}
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
            custom={{ yStart: -35, duration: 0.7 }}
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
            custom={{ yStart: -35, duration: 0.6 }}
            variants={FadeIn}
            blogImage={{
              lg: require('assets/img/insight/recent-post/blog-3/blog-lg.png'),
              md: require('assets/img/insight/recent-post/blog-3/blog-md.png'),
              sm: require('assets/img/insight/recent-post/blog-3/blog.png')
            }}
            text={
              md
                ? 'Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained'
                : 'Don’t let FUD give you FOMO or you’ll end up REKT — crypto slang, explained'.slice(0, 58) + '...'
            }
          />
        </div>
      </motion.div>
    </section>
  )
}

export default RecentPost
