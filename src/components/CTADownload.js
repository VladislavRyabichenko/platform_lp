import clsx from 'clsx'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Button } from 'components/common'

import { ThemeContext } from 'context/ThemeContext'

const CTADownload = ({ className }) => {
  return (
    <div className={clsx(
      'block',
      'relative',
      'bg-black/[0.02] dark:bg-white/[0.06]',
      className
    )}>
      <div className={clsx(
        'flex',
        'justify-between',
        'items-start sm:items-center',
        'px-6 sm:px-10 lg:pl-[140px] lg:pr-[96px]',
        'flex-col sm:flex-row',
        'max-w-[1440px]',
        'm-auto left-0 right-0',
        'pt-14 pb-[60px] md:py-[56px] lg:py-16',
        'gap-y-[32px]'
      )}>
        <Ornament className="block absolute top-0 left-0 w-full h-full z-[-1]"/>

        <div className="tablet:py-0 space-y-10">
          <div className="w-full lg:w-[465px]">
            <h3 className="h4-bold sm:h3-bold text-black dark:text-white w-full sm:w-[352px] tablet:w-[403px] whitespace-pre-line">
              {`Crush your trading
              financial goals`}
            </h3>
            <p className="text-s-reguler md:text-m-reguler text-black/60 dark:text-white/[0.56] w-full sm:w-[352px] tablet:w-[465px] mt-2 md:mt-4">
              Gain access to all our features from any device and stay connected. Let us assist you in overcoming your obstacles to achieve your financial freedom
            </p>

            <Link to="/auth/sign-up">
              <Button className={clsx(
                'bg-primary-500 mt-8 text-white',
                'h-11 md:h-14',
                'w-[180px] md:w-[212px]'
              )}>
                <p>Sign-up here</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.0013 18.3327C14.6037 18.3327 18.3346 14.6017 18.3346 9.99935C18.3346 5.39698 14.6037 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39698 1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.08203 10H12.082" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.418 12.5L12.918 10L10.418 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </Link>

            <p className="text-xs-reguler text-[#060721]/60 dark:text-white/80 tracking-[0.2px] w-fit mt-4">
              💳 No credit card required
            </p>
          </div>

        </div>

        <Illustration/>
      </div>
    </div>
  )
}

const AppButton = ({ className, type }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Button className={clsx(
      className,
      'h-10'
    )}>
      {theme === 'light' && (<img src={require(`assets/img/${type}/light.png`)} alt=""/>)}
      {theme === 'dark' && (<img src={require(`assets/img/${type}/dark.png`)} alt=""/>)}
    </Button>
  )
}

AppButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
}

const Illustration = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={clsx(
      'md:max-w-[387px] lg:max-w-[686px]'
    )}>
      <img className="block md:hidden" src={require(`assets/img/cta-download/${theme}/small.png`)} alt=""/>
      <img className="hidden md:block lg:hidden" src={require(`assets/img/cta-download/${theme}/medium.png`)} alt=""/>
      <img className="hidden lg:block" src={require(`assets/img/cta-download/${theme}/large.png`)} alt=""/>
    </div>
  )
}

const Ornament = ({ className }) => {
  return (
    <>
      {/* Large */}
      <svg className={clsx(
        className,
        'hidden lg:block'
      )} width="1440" height="432" viewBox="0 0 1440 432" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_4315_68682)">
          <path d="M1506.35 158.605C1434.8 247.854 1365.08 325.35 1336.23 310.669C1307.39 295.989 1325.86 201.83 1377.5 100.36C1429.14 -1.10958 1556.11 19.5802 1584.96 34.261C1613.8 48.9417 1577.9 69.3566 1506.35 158.605Z" fill="#6EBAF1" fillOpacity="0.7"/>
        </g>
        <g filter="url(#filter1_f_4315_68682)">
          <path d="M160.526 450.638C119.452 531.349 50.1193 578.44 5.66772 555.818C-38.7839 533.197 -85.6091 393.95 -44.5347 313.238C-3.4603 232.527 109.96 240.916 154.411 263.538C198.863 286.159 201.601 369.927 160.526 450.638Z" fill="url(#paint0_linear_4315_68682)" fillOpacity="0.7"/>
        </g>
        <rect opacity="0.4" x="73.9414" y="64" width="48" height="48" rx="12" transform="rotate(45 73.9414 64)" fill="url(#paint1_linear_4315_68682)" fillOpacity="0.7"/>
        <rect opacity="0.32" x="531.766" y="259.809" width="32" height="32" rx="12" transform="rotate(32 531.766 259.809)" fill="url(#paint2_linear_4315_68682)" fillOpacity="0.7"/>
        <rect opacity="0.24" x="212.379" y="386" width="16" height="16" rx="4" transform="rotate(32 212.379 386)" fill="url(#paint3_linear_4315_68682)" fillOpacity="0.7"/>
        <defs>
          <filter id="filter0_f_4315_68682" x="914.613" y="-386.055" width="1088.33" height="1106.52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_4315_68682"/>
          </filter>
          <filter id="filter1_f_4315_68682" x="-560.359" y="-251.994" width="1249.98" height="1313.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_4315_68682"/>
          </filter>
          <linearGradient id="paint0_linear_4315_68682" x1="73.9244" y1="222.578" x2="243.918" y2="319.191" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint1_linear_4315_68682" x1="86.5655" y1="64" x2="124.757" y2="66.3559" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint2_linear_4315_68682" x1="540.182" y1="259.809" x2="565.643" y2="261.379" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint3_linear_4315_68682" x1="216.587" y1="386" x2="229.317" y2="386.785" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Medium */}
      <svg className={clsx(
        className,
        'hidden sm:block lg:hidden'
      )} width="834" height="416" viewBox="0 0 834 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_4316_128756)">
          <rect opacity="0.4" x="30.0312" y="-7" width="36.811" height="36.811" rx="12" transform="rotate(45 30.0312 -7)" fill="url(#paint0_linear_4316_128756)" fillOpacity="0.7"/>
          <rect opacity="0.32" x="334.957" y="224" width="32" height="32" rx="12" transform="rotate(32 334.957 224)" fill="url(#paint1_linear_4316_128756)" fillOpacity="0.7"/>
          <rect opacity="0.24" x="212.375" y="371.902" width="16" height="16" rx="4" transform="rotate(32 212.375 371.902)" fill="url(#paint2_linear_4316_128756)" fillOpacity="0.7"/>
          <g filter="url(#filter0_f_4316_128756)">
            <path d="M160.53 430.638C119.456 511.349 50.1232 558.44 5.67163 535.818C-38.78 513.197 -85.6052 373.95 -44.5308 293.238C-3.45639 212.527 109.964 220.916 154.415 243.538C198.867 266.159 201.605 349.927 160.53 430.638Z" fill="url(#paint3_linear_4316_128756)" fillOpacity="0.7"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_4316_128756" x="-560.355" y="-271.994" width="1249.98" height="1313.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_4316_128756"/>
          </filter>
          <linearGradient id="paint0_linear_4316_128756" x1="39.7126" y1="-6.99998" x2="69.0015" y2="-5.19325" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint1_linear_4316_128756" x1="343.373" y1="224" x2="368.834" y2="225.571" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint2_linear_4316_128756" x1="216.583" y1="371.902" x2="229.314" y2="372.688" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint3_linear_4316_128756" x1="73.9283" y1="202.578" x2="243.922" y2="299.191" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>

        </defs>
      </svg>

      {/* Small */}
      <svg className={clsx(
        className,
        'block sm:hidden',
        'h-full'
      )} width="375" viewBox="0 0 375 556" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
        <g clipPath="url(#clip0_4316_128910)">
          <g filter="url(#filter0_f_4316_128910)">
            <path d="M369.093 401.978C311.694 500.921 254.344 587.97 223.625 577.767C192.907 567.565 197.097 471.702 232.984 363.652C268.871 255.602 397.508 257.076 428.227 267.278C458.945 277.481 426.492 303.035 369.093 401.978Z" fill="#6EBAF1" fillOpacity="0.7"/>
          </g>
          <g filter="url(#filter1_f_4316_128910)">
            <path d="M160.53 450.638C119.456 531.349 50.1232 578.44 5.67163 555.818C-38.78 533.197 -85.6052 393.95 -44.5308 313.238C-3.45639 232.527 109.964 240.916 154.415 263.538C198.867 286.159 201.605 369.927 160.53 450.638Z" fill="url(#paint0_linear_4316_128910)" fillOpacity="0.7"/>
          </g>
          <rect opacity="0.4" x="30.0312" y="13" width="36.811" height="36.811" rx="12" transform="rotate(45 30.0312 13)" fill="url(#paint1_linear_4316_128910)" fillOpacity="0.7"/>
          <rect opacity="0.32" x="324.953" y="224" width="32" height="32" rx="12" transform="rotate(32 324.953 224)" fill="url(#paint2_linear_4316_128910)" fillOpacity="0.7"/>
          <rect opacity="0.24" x="212.375" y="513.902" width="16" height="16" rx="4" transform="rotate(32 212.375 513.902)" fill="url(#paint3_linear_4316_128910)" fillOpacity="0.7"/>
        </g>
        <defs>
          <filter id="filter0_f_4316_128910" x="-204.93" y="-145.166" width="1052.98" height="1131.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_4316_128910"/>
          </filter>
          <filter id="filter1_f_4316_128910" x="-560.355" y="-251.994" width="1249.98" height="1313.48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_4316_128910"/>
          </filter>
          <linearGradient id="paint0_linear_4316_128910" x1="73.9283" y1="222.578" x2="243.922" y2="319.191" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint1_linear_4316_128910" x1="39.7126" y1="13" x2="69.0015" y2="14.8067" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint2_linear_4316_128910" x1="333.369" y1="224" x2="358.83" y2="225.571" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <linearGradient id="paint3_linear_4316_128910" x1="216.583" y1="513.902" x2="229.314" y2="514.688" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
          <clipPath id="clip0_4316_128910">
            <rect width="575" height="556" fill="white" transform="translate(-132)"/>
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

Ornament.propTypes = {
  className: PropTypes.string
}

CTADownload.propTypes = {
  className: PropTypes.string
}

export default CTADownload
