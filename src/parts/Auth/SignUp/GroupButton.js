import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

import { ThemeContext } from 'context/ThemeContext'

const GroupButton = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SocialMediaButton text="Google" icon="google"/>
        <SocialMediaButton text="Apple" icon="apple"/>
        <SocialMediaButton text="Twitter" icon="twitter"/>
        <SocialMediaButton text="Reddit" icon="reddit"/>
      </div>
    </div>
  )
}

const SocialMediaButton = ({ text, icon }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Button className="border border-black/[0.08] dark:border-white/[0.2] h-[48px] w-[139px] md:w-[163px]">
      <img className="w-5 h-5" src={require(`assets/icon/social-media/${theme}/${icon}.png`)} alt=""/>
      <p className="text-s-bold text-black dark:text-white">{text}</p>
    </Button>
  )
}

SocialMediaButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string
}

export default GroupButton
