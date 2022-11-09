import React from 'react'
import PropTypes from 'prop-types'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const Ornament = ({ className }) => {
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1])
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        ease: 'easeOut',
        duration: 1.75
      }
    }
  }

  return (
    <svg className={className} width="1440" height="494" viewBox="0 0 1440 494" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M-3 1L521 396.5L918 97L1442 493" stroke="url(#paint0_linear_3223_80487)"
        strokeOpacity="0.2"
        variants={pathVariants}
        style={{ pathLength, opacity }}
      />
      <circle cx="918" cy="97" r="2.5" fill="#F64786" stroke="white"/>
      <circle cx="70" cy="56" r="2.5" fill="#F1B56E" stroke="white"/>
      <circle cx="521" cy="396" r="2.5" fill="#74CEB9" stroke="white"/>
      <circle cx="1369" cy="438" r="2.5" fill="#3076FF" stroke="white"/>
      <defs>
        <linearGradient id="paint0_linear_3223_80487" x1="412.721" y1="-225.494" x2="1539.47" y2="-63.2775" gradientUnits="userSpaceOnUse">
          <stop stopColor="#829AF1"/>
          <stop offset="1" stopColor="#6066EB"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

Ornament.propTypes = {
  className: PropTypes.string
}

export default Ornament
