import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router'

import Exports from 'assets/icon/Export'

import { Button } from 'components/common'
import clsx from 'clsx'
import Img from './Img'
import useScrollToTop from 'utils/useScrollToTop'

const PostItem = ({ index, img, label, title, className }) => {
  const navigate = useNavigate()

  return (
    <div className={clsx(
      'flex',
      'flex-row md:flex-col',
      'w-full max-w-[357px] xl:max-w-[360px]',
      'gap-x-4 md:gap-y-6',
      index === 2 && 'md:hidden lg:flex',
      className
    )}>
      {/* <img src={img} alt=""/> */}
      <Img
        className="w-[98px] sm:w-fit lg:w-full"
        large={img?.lg}
        medium={img?.md}
        small={img?.sm}
      />

      <div className="">
        <div className="flex items-center justify-between">
          <span className="caption-s md:text-xs-medium text-black dark:text-white tracking-[0.2] px-4 py-2 bg-black/[0.02] dark:bg-white/[0.06] rounded-t-2xl rounded-r-2xl">
            {label}
          </span>

          <Button
            onClick={() => {
              navigate('/blog/From-avoiding-FOMO')
              useScrollToTop({ isSmooth: false })
            }}
            className="w-fit h-fit bg-white/[0.06] rounded p-[6px]"
          >
            <Exports className="stroke-black dark:stroke-white"/>
          </Button>
        </div>
        <p className="text-s-bold md:text-m-bold text-black dark:text-white mt-5">
          {title}
        </p>
      </div>
    </div>
  )
}

PostItem.propTypes = {
  index: PropTypes.number,
  className: PropTypes.string,
  img: PropTypes.node,
  label: PropTypes.string,
  title: PropTypes.string
}

export default PostItem
