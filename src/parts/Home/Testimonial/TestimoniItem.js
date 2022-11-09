import React from 'react'
import PropTypes from 'prop-types'

import Start from 'assets/svg/start.svg'
import clsx from 'clsx'

const TestimoniItem = ({ className, userImg, userName, flag, text }) => {
  return (
    <div className={clsx(
      'p-6 sm:min-w-[365px] rounded-lg space-y-6',
      'bg-[#060721]/[0.02] dark:bg-white/[0.06]',
      'backdrop-blur-[6px] dark:backdrop-blur-[8px]',
      className
    )}>
      <div className="flex justify-between items-center">
        <img className="w-12 h-12" src={userImg}/>

        <div className="flex space-x-1">
          <img src={Start} />
          <img src={Start} />
          <img src={Start} />
          <img src={Start} />
          <img src={Start} />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <p className="text-m-bold text-[#060721] dark:text-white">{userName}</p>
          <img src={flag} alt=""/>
        </div>
        <p className="text-s-reguler text-[#060721]/60 dark:text-white/[0.56]">
          {text}
        </p>
      </div>
    </div>
  )
}

TestimoniItem.propTypes = {
  className: PropTypes.string,
  userImg: PropTypes.node,
  userName: PropTypes.string,
  flag: PropTypes.node,
  text: PropTypes.string
}

export default TestimoniItem
