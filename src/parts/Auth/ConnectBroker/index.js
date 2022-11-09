import clsx from 'clsx'
import React, { useContext } from 'react'

import SuccessIcon from 'assets/icon/reset-success.svg'

import { Button } from 'components/common'
import { Link } from 'react-router-dom'

import { ExpiredContext } from 'context/Modal/ExpiredContext'

const Form = () => {
  const { setIsModalOpen } = useContext(ExpiredContext)

  return (
    <section
      className={clsx(
        'bg-white/[0.56] dark:bg-white/[0.06] rounded-2xl',
        'py-8 px-4 md:p-8',
        'mt-10 md:mt-[168px] lg:mt-[238px]'
      )}
      style={{
        boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div>
        <div className="bg-[#74CEB9] w-fit px-4 py-2 rounded-t-2xl rounded-r-2xl m-auto left-0 right-0">
          <img className="w-4 h-4" src={SuccessIcon} alt=""/>
        </div>
        <div className="mt-6">
          <h3 className="h4-bold md:h3-bold text-black dark:text-white text-center">Connect your Broker</h3>
          <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.8] text-center mt-3">
            Connect with broker and get your account verified.
          </p>
        </div>

        <div className="mt-6">
          <Link to="/" onClick={() => setIsModalOpen(true)}>
            <Button className="w-full h-12 bg-primary-500 text-s-bold text-white">Connect Now</Button>
          </Link>
          <Button className="w-full h-12 border border-black/[0.08] dark:border-white/20 text-s-bold mt-6 text-black dark:text-white">Skip</Button>
        </div>

      </div>

    </section>
  )
}

export default Form
