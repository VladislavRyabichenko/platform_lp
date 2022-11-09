import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

import UserImage from 'assets/img/insight/recent-post/blog-2/user.png'

import Exports from 'assets/icon/Export'
import Img from './Img'
import { Button } from 'components/common'
import useScrollToTop from 'utils/useScrollToTop'

const SmallBlog = ({ custom, variants, blogImage, text }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      custom={custom}
      variants={variants}
      className={clsx(
        'flex',
        'py-4 pl-4 pr-3 md:p-8',
        'justify-between',
        'flex-row md:flex-col lg:flex-row',
        'bg-white dark:bg-white/[0.06] rounded-lg',
        // 'space-x-0 lg:space-x-6',
        // 'space-y-6 lg:space-y-0'
        'gap-x-4 md:gap-6'
      )}
    >
      {/* <img className="w-full lg:w-[200px] h-[188px]" src={blogImage} alt=""/> */}
      <Img
        className="w-[98px] sm:w-fit lg:w-[200px] h-[154px] md:h-[188px]"
        large={blogImage?.lg}
        medium={blogImage?.md}
        small={blogImage?.sm}
      />

      <div>
        <div className="flex items-center justify-between">
          <div className="bg-black/[0.04] dark:bg-white/[0.06] py-2 px-4 w-fit rounded-t-2xl rounded-r-2xl">
            <p className="text-xs-medium text-black dark:text-white tracking-[0.2px]">TIPS</p>
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

        <Link to="/blog/From-avoiding-FOMO">
          <p className="text-s-bold md:text-m-bold text-black dark:text-white mt-3 md:mt-5">{text}</p>
        </Link>

        <div className="flex items-center gap-x-2 md:gap-x-3 mt-4 md:mt-6">
          <img className="w-8 h-8 md:w-10 md:h-10" src={UserImage}/>

          <div className="space-y-1">
            <p className="text-xs-medium md:text-s-medium text-black dark:text-white">Courtney Henry</p>
            <div className="flex items-center space-x-2">
              <p className="text-[11px] md:text-xs-reguler text-black/60 dark:text-white/[0.56]">16 Mar 2022</p>

              <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-black/[0.08] dark:fill-white/20" cx="2" cy="2" r="2" />
              </svg>

              <p className="text-[11px] md:text-xs-reguler text-black/60 dark:text-white/[0.56]">16 min read</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

SmallBlog.propTypes = {
  custom: PropTypes.object,
  variants: PropTypes.object,
  blogImage: PropTypes.node,
  text: PropTypes.string
}

export default SmallBlog
