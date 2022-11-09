import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const CardItem = ({ index, custom, variants, logo, title, description }) => {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      className={clsx(
        'min-h-[288px] bg-black/[0.04] dark:bg-white/[0.06] rounded-2xl max-w-[365px]',
        'border border-divider-light-400/10',
        'py-6 md:py-8',
        'px-4 md:px-6'
      )}
    >
      <img className="m-auto left-0 right-0 h-14 w-14" src={logo} alt=""/>

      <div className="space-y-3 mt-6">
        <h4 className="text-l-bold md:h4-bold text-black dark:text-white text-center">{title}</h4>
        <p className="text-s-reguler text-black/60 dark:text-white/[0.56] text-center">{description}</p>
      </div>
    </motion.div>
  )
}

CardItem.propTypes = {
  index: PropTypes.number,
  custom: PropTypes.object,
  variants: PropTypes.object,
  logo: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
}

export default CardItem
