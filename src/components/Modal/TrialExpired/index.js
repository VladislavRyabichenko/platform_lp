import clsx from 'clsx'
import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Header from './Header'

import { Button } from 'components/common'
import Tab from './Tab'
import TabContent from './TabContent'
import { ExpiredContext } from 'context/Modal/ExpiredContext'
import Coupon from './Coupon'
import useStyleOverflow from 'utils/useStyleOverflow'

const TrialExpired = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ExpiredContext)

  useStyleOverflow(isModalOpen)

  return (
    <div
      className={clsx(
        'overflow-scroll',
        isModalOpen ? 'flex' : 'hidden',
        'items-center',
        'backdrop-filter',
        'backdrop-blur-[6px] dark:backdrop-blur-[4px]',
        'fixed top-0 bottom-0 left-0 right-0',
        'w-full h-full',
        'bg-black/[0.08] dark:bg-black/70',
        'px-6 md:px-0',
        'pt-11 md:pt-[100px]',
        'pb-12 md:pb-[200px]'
      )}
    >
      <div className={clsx(
        'relative',
        'm-auto left-0 right-0',
        'bg-white dark:bg-[#15162E]',
        'w-[533px] h-fit',
        'pt-[72px]',
        'pb-12',
        'px-4 md:px-16',
        'rounded-xl'
      )}>
        <CloseButton onClick={() => setIsModalOpen(false)}/>

        <Header/>

        <Tab/>
        <TabContent/>

        <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] text-center mt-6 md:mt-8">
            Compare Tryndx plans at our <Link to="#" className="text-[#2160DC] text-s-medium md:text-m-bold">Pricing Page</Link>
        </p>

        <Coupon/>

        <Button className="w-full h-12 bg-[#2160DC] mt-6 text-white">
            Checkout
        </Button>

        <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] text-center mt-6">
            By upgrading your account you accept
          <Link to="#" className="text-s-medium md:text-m-bold text-[#2160DC]"> terms of use </Link>
            and
          <Link to="#" className="text-s-medium md:text-m-bold text-[#2160DC]"> refund policy</Link>
        </p>
      </div>
    </div>
  )
}

const ButtonEmotion = ({ children, emoticon: Emoticon }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Button
      className="relative h-fit w-fit"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Emoticon fillColor={isHover ? '#FFCA28' : 'white'} fillOpacity={isHover ? '1' : '0.2'} />
      <p className={clsx(
        'absolute whitespace-nowrap bottom-[-20px]',
        isHover ? 'block' : 'hidden'
      )}>Very Like</p>
    </Button>
  )
}

const InputRadio = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex gap-x-2">
      <input type="radio" name="feedbackType" id={id} value={id} checked={checked} onChange={onChange} />
      <label htmlFor={id} className="text-s-reguler text-white/80">{label}</label>
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

ButtonEmotion.propTypes = {
  children: PropTypes.node,
  emoticon: PropTypes.node
}

InputRadio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

export default TrialExpired
