import clsx from 'clsx'
import PropTypes from 'prop-types'
import React, { useContext, useRef, useState } from 'react'

import { ThemeContext } from 'context/ThemeContext'

import { Button } from 'components/common'
import useCloseClickOutside from 'utils/useCloseClickOutside'

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const wrapperRef = useRef(null)
  const [isHover, setIsHover] = useState(false)

  useCloseClickOutside(wrapperRef, setIsHover)

  return (
    <div ref={wrapperRef} className="relative border-l border-l-[#DADADE] dark:border-l-[#2C2D43] pl-2 md:pl-4">
      <Button
        className="w-fit h-fit"
        onMouseEnter={() => setIsHover(true)}
      >
        {theme === 'dark' && <MoonIcon themeActive={theme}/> }
        {theme === 'light' && <SunIcon themeActive={theme}/> }
        <p className="text-s-bold text-[#696A79]">
          {theme === 'dark' && 'Dark' }
          {theme === 'light' && 'Light' }
        </p>
      </Button>

      <div className={clsx(
        'absolute rounded-xl space-y-4 p-6 top-[52px] left-1',
        'bg-[#F0F0F5] dark:bg-[#15162E]',
        isHover ? 'block' : 'hidden'
      )}>
        <Button
          className="w-fit h-fit gap-x-4"
          onClick={() => {
            setIsHover(false)
            setTheme('dark')
          }}
        >
          <MoonIcon themeActive={theme}/>
          <p className={clsx(
            'text-s-bold text-[#06072199]/[0.6] dark:text-primary-500'
          )}>Dark</p>
        </Button>
        <Button
          className="w-fit h-fit gap-x-4"
          onClick={() => {
            setIsHover(false)
            setTheme('light')
          }}
        >
          <SunIcon themeActive={theme}/>
          <p className={clsx(
            'text-s-bold text-primary-500 dark:text-white/[0.56]'
          )}>Light</p>
        </Button>
      </div>
    </div>
  )
}

const MoonIcon = ({ themeActive }) => {
  return (
    <svg className="w-6 h-6 md:w-7 md:h-7" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.3577 18.5849C25.1711 18.2699 24.6461 17.7799 23.3394 18.0133C22.6161 18.1416 21.8811 18.1999 21.1461 18.1649C18.4277 18.0483 15.9661 16.7999 14.2511 14.8749C12.7344 13.1833 11.8011 10.9783 11.7894 8.59827C11.7894 7.26827 12.0461 5.98493 12.5711 4.7716C13.0844 3.59327 12.7227 2.97493 12.4661 2.71827C12.1977 2.44993 11.5677 2.0766 10.3311 2.58993C5.5594 4.5966 2.60774 9.37993 2.95774 14.5016C3.30774 19.3199 6.69107 23.4383 11.1711 24.9899C12.2444 25.3633 13.3761 25.5849 14.5427 25.6316C14.7294 25.6433 14.9161 25.6549 15.1027 25.6549C19.0111 25.6549 22.6744 23.8116 24.9844 20.6733C25.7661 19.5883 25.5561 18.8999 25.3577 18.5849Z" fill={themeActive === 'dark' ? '#2160DC' : '#060721'} fillOpacity={themeActive === 'dark' ? '1' : '0.6' }/>
    </svg>
  )
}

const SunIcon = ({ themeActive }) => {
  return (
    <svg className="w-6 h-6 md:w-7 md:h-7" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9987 22.1668C18.509 22.1668 22.1654 18.5105 22.1654 14.0002C22.1654 9.48984 18.509 5.8335 13.9987 5.8335C9.48837 5.8335 5.83203 9.48984 5.83203 14.0002C5.83203 18.5105 9.48837 22.1668 13.9987 22.1668Z" fill={themeActive === 'light' ? '#2160DC' : 'white'} fillOpacity={themeActive === 'light' ? '1' : '0.56'}/>
      <path d="M14.0013 26.7865C13.3596 26.7865 12.8346 26.3082 12.8346 25.6665V25.5732C12.8346 24.9315 13.3596 24.4065 14.0013 24.4065C14.643 24.4065 15.168 24.9315 15.168 25.5732C15.168 26.2148 14.643 26.7865 14.0013 26.7865ZM22.3313 23.4965C22.028 23.4965 21.7363 23.3798 21.503 23.1582L21.3513 23.0065C20.8963 22.5515 20.8963 21.8165 21.3513 21.3615C21.8063 20.9065 22.5413 20.9065 22.9963 21.3615L23.148 21.5132C23.603 21.9682 23.603 22.7032 23.148 23.1582C22.9263 23.3798 22.6346 23.4965 22.3313 23.4965ZM5.6713 23.4965C5.36797 23.4965 5.0763 23.3798 4.84297 23.1582C4.38797 22.7032 4.38797 21.9682 4.84297 21.5132L4.99464 21.3615C5.44964 20.9065 6.18464 20.9065 6.63964 21.3615C7.09464 21.8165 7.09464 22.5515 6.63964 23.0065L6.48797 23.1582C6.2663 23.3798 5.96297 23.4965 5.6713 23.4965ZM25.668 15.1665H25.5746C24.933 15.1665 24.408 14.6415 24.408 13.9998C24.408 13.3582 24.933 12.8332 25.5746 12.8332C26.2163 12.8332 26.788 13.3582 26.788 13.9998C26.788 14.6415 26.3096 15.1665 25.668 15.1665ZM2.42797 15.1665H2.33464C1.69297 15.1665 1.16797 14.6415 1.16797 13.9998C1.16797 13.3582 1.69297 12.8332 2.33464 12.8332C2.9763 12.8332 3.54797 13.3582 3.54797 13.9998C3.54797 14.6415 3.06964 15.1665 2.42797 15.1665ZM22.1796 6.98817C21.8763 6.98817 21.5846 6.8715 21.3513 6.64984C20.8963 6.19484 20.8963 5.45984 21.3513 5.00484L21.503 4.85317C21.958 4.39817 22.693 4.39817 23.148 4.85317C23.603 5.30817 23.603 6.04317 23.148 6.49817L22.9963 6.64984C22.7746 6.8715 22.483 6.98817 22.1796 6.98817ZM5.82297 6.98817C5.51964 6.98817 5.22797 6.8715 4.99464 6.64984L4.84297 6.4865C4.38797 6.0315 4.38797 5.2965 4.84297 4.8415C5.29797 4.3865 6.03297 4.3865 6.48797 4.8415L6.63964 4.99317C7.09464 5.44817 7.09464 6.18317 6.63964 6.63817C6.41797 6.8715 6.11463 6.98817 5.82297 6.98817ZM14.0013 3.5465C13.3596 3.5465 12.8346 3.06817 12.8346 2.4265V2.33317C12.8346 1.6915 13.3596 1.1665 14.0013 1.1665C14.643 1.1665 15.168 1.6915 15.168 2.33317C15.168 2.97484 14.643 3.5465 14.0013 3.5465Z" fill={themeActive === 'light' ? '#2160DC' : 'white'} fillOpacity={themeActive === 'light' ? '1' : '0.56'}/>
    </svg>
  )
}

SunIcon.propTypes = {
  themeActive: PropTypes.string
}

MoonIcon.propTypes = {
  themeActive: PropTypes.string
}

export default ThemeSwitchButton
