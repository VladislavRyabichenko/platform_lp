import React from 'react'

import MessageText from 'assets/icon/timer-dessert.svg'

const Header = () => {
  return (
    <div className="w-full md:w-[405px] m-auto left-0 right-0">
      <div className="bg-[#E93A6F] rounded-t-2xl rounded-r-2xl w-fit m-auto left-0 right-0 px-4 py-2">
        <img src={MessageText} alt=""/>
      </div>
      <div className="mt-8">
        <h4 className="text-black dark:text-white h4-bold md:h3-bold text-center">Your trial has expired!</h4>
      </div>
    </div>
  )
}

export default Header
