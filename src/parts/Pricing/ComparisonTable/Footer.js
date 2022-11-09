import clsx from 'clsx'
import React from 'react'
import { useNavigate } from 'react-router'

import Exports from 'assets/icon/Export'
import { Button } from 'components/common'
import useScrollToTop from 'utils/useScrollToTop'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className={clsx(
      'flex',
      'gap-y-6',
      'flex-col sm:flex-row',
      'justify-between items-center w-full px-4',
      'pt-6 md:pt-9'
    )}>
      <p className="text-l-bold text-black dark:text-white">Get Started Today</p>

      <div className="flex gap-x-2">
        <Button
          onClick={() => {
            navigate('/auth/sign-up')
            useScrollToTop({ isSmooth: false })
          }}
          className="border border-black/[0.08] dark:border-white/[0.2] rounded-xl h-14 w-[165px] text-black dark:text-white"
        >
          <p> Premium</p>
          <Exports className="stroke-black dark:stroke-white"/>
        </Button>
        <Button
          onClick={() => {
            navigate('/auth/sign-up')
            useScrollToTop({ isSmooth: false })
          }}
          className="bg-[#2160DC] rounded-xl h-14 w-[165px] text-white"
        >
          <p>Premium +</p>
          <Exports/>
        </Button>
      </div>
    </div>
  )
}

export default Footer
