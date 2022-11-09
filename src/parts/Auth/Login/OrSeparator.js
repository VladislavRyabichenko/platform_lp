import React from 'react'

const OrSeparator = () => {
  return (
    <div className="flex items-center gap-x-2">
      <HorizontalLine/>
      <p className="text-xs-reguler text-black/60 dark:text-white/[0.56] tracking-[0.2]">OR</p>
      <HorizontalLine/>
    </div>
  )
}

const HorizontalLine = () => {
  return (
    <svg className="w-full" width="155" height="1" viewBox="0 0 155 1" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <line className="stroke-black/[0.08] dark:stroke-white/10" y1="0.5" x2="154.5" y2="0.5" />
    </svg>
  )
}

export default OrSeparator
