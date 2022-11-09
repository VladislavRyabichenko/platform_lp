import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import DocumentIcon from 'assets/icon/Blog/document-text.svg'

const Header = () => {
  return (
    <header className={clsx(
      'md:max-w-[962px]',
      'm-auto left-0 right-0',
      'mt-8 mb-8 md:mt-14 md:mb-10 lg:mt-20 lg:mb-10',
      'px-6 md:px-10 lg:px-0'
    )}>
      <div className="m-auto left-0 right-0 w-fit bg-[#F64786] py-2 px-4 rounded-t-2xl rounded-r-2xl">
        <img src={DocumentIcon} alt=""/>
      </div>

      <h2 className="h3-bold lg:h2-bold text-black dark:text-white mt-2 text-center">
        From avoiding FOMO to having a plan, 5 key ways to manage a crypto down cycle
      </h2>

      <div className="w-fit flex items-center gap-x-2 mt-6 m-auto left-0 right-0">
        <Label text="TIPS"/>
        <Label text="BEGINNER'S GUIDE"/>
      </div>
    </header>
  )
}

const Label = ({ text }) => {
  return (
    <div className="w-fit h-fit px-4 py-2 bg-black/[0.02] dark:bg-white/[0.06] rounded-t-2xl rounded-r-2xl">
      <p className="text-s-medium text-black dark:text-white">{text}</p>
    </div>
  )
}

Label.propTypes = {
  text: PropTypes.string
}

export default Header
