import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  })

  return (
    <div className="w-full bg-white dark:bg-[#060721] h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-center h4-bold md:h2-bold text-[#060721] dark:text-white tracking-[0.5px]">Oops, Page Not Found</h1>
        <h1 className="text-center text-s-reguler md:text-m-reguler text-[#060721]/60 dark:text-white/[0.56] w-full">Please wait, page will redirect automatically back to homepage</h1>
      </div>
    </div>
  )
}

export default Page404
