import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import User1 from 'assets/img/insight/user-1.png'

import { Button } from 'components/common'

import Twitter from 'assets/icon/social-media/Twitter'
import Facebook from 'assets/icon/social-media/Facebook'
import Linkedin from 'assets/icon/social-media/Linkedin'

const UserInformation = () => {
  return (
    <section className={clsx(
      'md:max-w-[962px]',
      'm-auto left-0 right-0',
      'px-6 md:px-10'
    )}>
      <div className={clsx(
        'flex items-center justify-between',
        'flex-wrap',
        'gap-y-6',
        'border-t border-t-black/[0.08] dark:border-t-white/[0.20]',
        'pt-8'
      )}>
        <div className={clsx(
          'flex items-center gap-x-3'
        )}>
          <img className="w-16 h-16" src={User1} alt=""/>

          <div>
            <p className="text-l-bold text-black dark:text-white">Courtney Henry</p>
            <div className="flex items-center gap-x-2">
              <p className="text-m-reguler text-black/60 dark:text-white/[0.56]">16 Mar 2022</p>
              <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-black/[0.02] dark:fill-white/20" cx="2" cy="2" r="2" />
              </svg>
              <p className="text-m-reguler text-black/60 dark:text-white/[0.56]">16 min read</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <ShareButton className="py-2.5 px-4">
            Share
          </ShareButton>
          <ShareButton className="p-2.5">
            <Twitter className="fill-black dark:fill-white"/>
          </ShareButton>
          <ShareButton className="p-2.5">
            <Facebook className="fill-black dark:fill-white" />
          </ShareButton>
          <ShareButton className="p-2.5">
            <Linkedin className="fill-black dark:fill-white"/>
          </ShareButton>
        </div>
      </div>
    </section>
  )
}

const ShareButton = ({ className, children }) => {
  return (
    <Button className={clsx(
      'bg-black/[0.04] dark:bg-white/[0.1] rounded-full w-fit h-fit text-s-medium text-black dark:text-white',
      className
    )}>
      {children}
    </Button>
  )
}

ShareButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default UserInformation
