import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

import useResponsive from 'utils/useResponsive'

const BgGradient = ({ className }) => {
  const { md, lg } = useResponsive()

  return lg // large
    ? (
      <svg className={clsx(
        'w-full',
        'max-w-[1160px]',
        className
      )} width="1160" height="682" viewBox="0 0 1160 682" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_3717_124051)">
          <g filter="url(#filter0_f_3717_124051)">
            <path d="M1408.31 423.983C1233.11 537.4 1062.37 635.882 991.727 617.226C921.084 598.569 966.328 478.912 1092.78 349.964C1219.24 221.017 1530.17 247.309 1600.81 265.965C1671.46 284.622 1583.52 310.565 1408.31 423.983Z" fill="#6EBAF1" fillOpacity="0.4"/>
          </g>
          <g filter="url(#filter1_f_3717_124051)">
            <path d="M290.324 87.0102C182.959 196.492 1.72982 260.369 -114.463 229.683C-230.655 198.998 -353.052 10.1143 -245.688 -99.3673C-138.323 -208.849 158.147 -197.47 274.34 -166.785C390.532 -136.099 397.689 -22.4714 290.324 87.0102Z" fill="url(#paint0_linear_3717_124051)" fillOpacity="0.4"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_f_3717_124051" x="550.375" y="-157.686" width="1482.89" height="1185.19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3717_124051"/>
          </filter>
          <filter id="filter1_f_3717_124051" x="-787.051" y="-687.854" width="1653.44" height="1425.23" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3717_124051"/>
          </filter>
          <linearGradient id="paint0_linear_3717_124051" x1="63.9543" y1="-222.345" x2="331.238" y2="70.3808" gradientUnits="userSpaceOnUse">
            <stop stopColor="#829AF1"/>
            <stop offset="1" stopColor="#6066EB"/>
          </linearGradient>
        </defs>
      </svg>
    )
    : md
      ? (
        <svg className={clsx(
          'w-full',
          'max-w-[754px]',
          className
        )} width="754" height="1338" viewBox="0 0 754 1338" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3717_124052)">
            <g filter="url(#filter0_f_3717_124052)">
              <path d="M286.324 -66.4548C178.959 144.517 -2.27019 267.608 -118.463 208.477C-234.655 149.346 -357.052 -214.634 -249.687 -425.606C-142.323 -636.578 154.147 -614.651 270.34 -555.519C386.532 -496.388 393.689 -277.427 286.324 -66.4548Z" fill="url(#paint0_linear_3717_124052)" fillOpacity="0.4"/>
            </g>
            <g filter="url(#filter1_f_3717_124052)">
              <path d="M929.496 840.558C754.289 1059.11 583.554 1248.89 512.911 1212.94C442.267 1176.99 487.511 946.408 613.966 697.925C740.421 449.441 1051.35 500.107 1122 536.058C1192.64 572.009 1104.7 622.002 929.496 840.558Z" fill="#6EBAF1" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3717_124052" x="-791.051" y="-1096.12" width="1653.44" height="1819.42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3717_124052"/>
            </filter>
            <filter id="filter1_f_3717_124052" x="71.5586" y="97.8984" width="1482.89" height="1527.44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="204" result="effect1_foregroundBlur_3717_124052"/>
            </filter>
            <linearGradient id="paint0_linear_3717_124052" x1="59.9542" y1="-662.585" x2="504.302" y2="-410.047" gradientUnits="userSpaceOnUse">
              <stop stopColor="#829AF1"/>
              <stop offset="1" stopColor="#6066EB"/>
            </linearGradient>
          </defs>
        </svg>
      )
      : (
        <svg className={clsx(
          'w-full',
          'max-w-[327px]',
          className
        )} width="327" height="288" viewBox="0 0 327 288" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_3718_124053)">
            <g filter="url(#filter0_f_3718_124053)">
              <path d="M245.063 25.1679C166.493 179.557 33.8698 269.635 -51.1598 226.363C-136.189 183.091 -225.759 -83.2694 -147.19 -237.658C-68.6204 -392.047 148.336 -376.001 233.366 -332.729C318.395 -289.457 323.632 -129.221 245.063 25.1679Z" fill="url(#paint0_linear_3718_124053)" fillOpacity="0.4"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_f_3718_124053" x="-677.457" y="-862.439" width="1478.18" height="1599.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_3718_124053"/>
            </filter>
            <linearGradient id="paint0_linear_3718_124053" x1="79.4056" y1="-411.08" x2="404.579" y2="-226.272" gradientUnits="userSpaceOnUse">
              <stop stopColor="#829AF1"/>
              <stop offset="1" stopColor="#6066EB"/>
            </linearGradient>
          </defs>
        </svg>

      )
}

BgGradient.propTypes = {
  className: PropTypes.string
}

export default BgGradient
