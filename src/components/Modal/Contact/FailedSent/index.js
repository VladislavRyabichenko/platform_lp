import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'
import useStyleOverflow from 'utils/useStyleOverflow'

const FailedSent = ({ isOpen, onClose }) => {
  useStyleOverflow(isOpen)

  return (
    <div
      className={clsx(
        isOpen ? 'flex' : 'hidden',
        'items-center',
        'backdrop-filter backdrop-blur-[4px]',
        'fixed top-0 bottom-0 left-0 right-0',
        'w-full h-full bg-black/[0.08] dark:bg-black/70',
        'px-6 md:px-0',
        'z-10'
      )}
    >
      <div className={clsx(
        'relative',
        'm-auto left-0 right-0',
        'bg-white dark:bg-[#15162E]',
        'w-fit h-fit',
        'pt-[72px]',
        'pb-5 md:pb-8',
        'px-4 md:px-10',
        'rounded-xl'
      )}>
        <CloseButton onClick={onClose}/>

        <Header/>

        <Button
          className={clsx(
            'mt-8',
            'bg-primary-500 text-white',
            'w-[126px] h-11 md:h-14',
            'm-auto left-0 right-0'
          )}
          onClick={onClose}
        >
          Try Again
        </Button>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="w-full md:w-[405px] m-auto left-0 right-0">
      <div className="bg-brand-danger-main rounded-t-2xl rounded-r-2xl w-fit m-auto left-0 right-0 px-4 py-2">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.4987 1.33398C4.82536 1.33398 1.83203 4.32732 1.83203 8.00065C1.83203 11.674 4.82536 14.6673 8.4987 14.6673C12.172 14.6673 15.1654 11.674 15.1654 8.00065C15.1654 4.32732 12.172 1.33398 8.4987 1.33398ZM10.7387 9.53399C10.932 9.72732 10.932 10.0473 10.7387 10.2407C10.6387 10.3407 10.512 10.3873 10.3854 10.3873C10.2587 10.3873 10.132 10.3407 10.032 10.2407L8.4987 8.70732L6.96536 10.2407C6.86536 10.3407 6.7387 10.3873 6.61203 10.3873C6.48536 10.3873 6.3587 10.3407 6.2587 10.2407C6.06536 10.0473 6.06536 9.72732 6.2587 9.53399L7.79203 8.00065L6.2587 6.46732C6.06536 6.27398 6.06536 5.95398 6.2587 5.76065C6.45203 5.56732 6.77203 5.56732 6.96536 5.76065L8.4987 7.29398L10.032 5.76065C10.2254 5.56732 10.5454 5.56732 10.7387 5.76065C10.932 5.95398 10.932 6.27398 10.7387 6.46732L9.20537 8.00065L10.7387 9.53399Z" fill="white"/>
        </svg>
      </div>
      <div className="mt-6 md:mt-8">
        <h4 className="text-black dark:text-white h4-bold md:h3-bold text-center">Your email failed to send</h4>
        <p className="text-black/60 dark:text-white/80 text-s-reguler md:text-m-reguler text-center mt-2 md:mt-3 w-full md:w-[340px] m-auto left-0 right-0">
          Oops, your request is failed to send. Please check your connection and try again.
        </p>
      </div>
    </div>
  )
}

const CloseButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        'w-fit h-fit',
        'absolute',
        'top-4 md:top-5',
        'right-4 md:right-5'
      )}
    >
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0013 29.8337C23.3651 29.8337 29.3346 23.8641 29.3346 16.5003C29.3346 9.13653 23.3651 3.16699 16.0013 3.16699C8.63751 3.16699 2.66797 9.13653 2.66797 16.5003C2.66797 23.8641 8.63751 29.8337 16.0013 29.8337Z" fill="white" fillOpacity="0.06" />
        <path d="M20 12.5L12 20.5" stroke="#70717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12.5L20 20.5" stroke="#70717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Button>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func
}

FailedSent.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default FailedSent
