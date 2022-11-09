import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

import UserImage from 'assets/img/insight/user-1.png'
import Exports from 'assets/icon/Export'

import Img from './Img'
import { Button } from 'components/common'
import useScrollToTop from 'utils/useScrollToTop'

const BigBlog = ({ custom, variants }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      custom={custom}
      variants={variants}
      className="p-4 md:p-8 bg-white dark:bg-white/[0.06] rounded-lg w-full lg:max-w-[564px]"
    >
      {/* <img src={BlogImage} alt=""/> */}
      <Img
        className="w-fit m-auto left-0 right-0"
        large={require('assets/img/insight/recent-post/blog-1/blog-lg.png')}
        medium={require('assets/img/insight/recent-post/blog-1/blog-md.png')}
        small={require('assets/img/insight/recent-post/blog-1/blog.png')}
      />

      <div className="flex items-center justify-between mt-6">
        <div className="bg-[#060721]/[0.04] dark:bg-white/[0.06] py-2 px-4 w-fit rounded-t-2xl rounded-r-2xl">
          <p className="text-xs-medium text-[#060721] dark:text-white tracking-[0.2px]">TIPS</p>
        </div>

        <Button
          onClick={() => {
            navigate('/blog/From-avoiding-FOMO')
            useScrollToTop({ isSmooth: false })
          }}
          className="bg-black/[0.04] dark:bg-white/[0.06] p-1.5 rounded-[4px]"
        >
          <Exports className="stroke-black dark:stroke-white" />
        </Button>
      </div>

      <p className="text-m-bold md:text-l-bold text-[#060721] dark:text-white mt-5">From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle</p>

      <div className="flex items-center space-x-3 mt-6">
        <img className="w-12 h-12" src={UserImage}/>

        <div className="space-y-1">
          <p className="text-s-medium md:text-m-medium text-[#060721] dark:text-white">Courtney Henry</p>
          <div className="flex items-center space-x-2">
            <p className="text-xs-reguler md:text-s-reguler text-[#060721]/60 dark:text-white/[0.56]">16 Mar 2022</p>

            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="fill-[#060721]/[0.08] dark:fill-white/[0.2]" cx="2" cy="2" r="2" />
            </svg>

            <p className="text-xs-reguler md:text-s-reguler text-[#060721]/60 dark:text-white/[0.56]">16 min read</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

BigBlog.propTypes = {
  custom: PropTypes.object,
  variants: PropTypes.object
}

export default BigBlog
