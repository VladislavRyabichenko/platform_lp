import clsx from 'clsx'
import { Button } from 'components/common'
import React from 'react'
import { useNavigate } from 'react-router'
import useScrollToTop from 'utils/useScrollToTop'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="flex items-center md:items-start justify-between border-b border-black/[0.08] dark:border-b-white/[0.1] pb-4 md:pb-6">
      <h4 className="h4-bold text-black dark:text-white">Related Posts</h4>

      <Button
        onClick={() => {
          navigate('/blog')
          useScrollToTop({ isSmooth: false })
        }}
        className={clsx(
          'bg-[#2160DC] w-fit h-fit',
          'px-[11px] md:px-[30px]',
          'py-3 md:py-[14px]',
          'text-white'
        )}>View all posts</Button>
    </header>
  )
}

export default Header
