import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const AdvantageItem = ({ custom, variants, logo, title, description }) => {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      className="w-[327px] md:w-[365px] p-4 md:p-0"
    >
      <img className="w-14 h-14 m-auto left-0 right-0" src={logo} alt=""/>

      <div className="mt-6">
        <h4 className="text-l-bold md:h4-bold text-black dark:text-white text-center">{title}</h4>
        <p className="text-s-reguler text-black/60 dark:text-white/[0.56] text-center mt-3">{description}</p>
      </div>
    </motion.div>
  )
}

AdvantageItem.propTypes = {
  custom: PropTypes.object,
  variants: PropTypes.object,
  logo: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
}

export default AdvantageItem
