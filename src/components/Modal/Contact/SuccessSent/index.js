import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'
import useStyleOverflow from 'utils/useStyleOverflow'

const SuccessSent = ({ isOpen, onClose }) => {
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
        'pb-5 pt-[72px] md:py-[72px]',
        'px-4 md:px-16',
        'rounded-xl'
      )}>
        <CloseButton onClick={onClose}/>

        <Header/>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="w-full md:w-[405px] m-auto left-0 right-0">
      <div className="bg-brand-success-main rounded-t-2xl rounded-r-2xl w-fit m-auto left-0 right-0 px-4 py-2">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.832 2.33203H5.16536C3.16536 2.33203 1.83203 3.33203 1.83203 5.66536V10.332C1.83203 12.6654 3.16536 13.6654 5.16536 13.6654H11.832C13.832 13.6654 15.1654 12.6654 15.1654 10.332V5.66536C15.1654 3.33203 13.832 2.33203 11.832 2.33203ZM12.1454 6.39203L10.0587 8.0587C9.6187 8.41203 9.0587 8.58536 8.4987 8.58536C7.9387 8.58536 7.37203 8.41203 6.9387 8.0587L4.85203 6.39203C4.6387 6.2187 4.60536 5.8987 4.77203 5.68536C4.94536 5.47203 5.2587 5.43203 5.47203 5.60536L7.5587 7.27203C8.06536 7.6787 8.92536 7.6787 9.43203 7.27203L11.5187 5.60536C11.732 5.43203 12.052 5.46536 12.2187 5.68536C12.392 5.8987 12.3587 6.2187 12.1454 6.39203Z" fill="white"/>
        </svg>
      </div>
      <div className="mt-6 md:mt-8">
        <h4 className="text-black dark:text-white h4-bold md:h3-bold text-center">
          Thanks for your email
        </h4>
        <p className="text-black/60 dark:text-white/80 text-s-reguler md:text-m-reguler text-center mt-2 md:mt-3 w-full m-auto left-0 right-0">
          We've received your support request, and someone from our team will be in touch soon.
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

SuccessSent.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default SuccessSent
