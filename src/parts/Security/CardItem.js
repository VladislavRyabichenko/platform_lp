import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import { Button } from 'components/common'

const CardItem = ({ custom, variants, logo, title, description, information, isButton }) => {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      className={clsx(
        'min-h-[348px] md:min-h-[372px] bg-black/[0.04] dark:bg-white/[0.06] rounded-2xl max-w-[365px]',
        'px-4 md:px-6',
        'pt-6 pb-4 md:pt-8 md:pb-6'
      )}
    >
      <img className={clsx(
        'm-auto left-0 right-0',
        'h-14',
        'w-14'
      )} src={logo} alt=""/>

      <div className="mt-4 md:mt-6">
        <h4 className="text-l-bold md:h4-bold text-black dark:text-white text-center whitespace-pre-line">{title}</h4>
        {description && (
          <p className="text-s-reguler text-black/60 dark:text-white/[0.56] text-center whitespace-pre-line mt-3">{description}</p>
        )}

        {information && (
          <p className="text-s-reguler text-black/60 dark:text-white/[0.56] text-center mt-6 px-1.5">{information}</p>
        )}

        {isButton && (
          <a href="mailto:security@tryndx.com">
            <Button className="w-full h-11 bg-primary-500 mt-[72px] text-white">Contact Us</Button>
          </a>
        )}
      </div>
    </motion.div>
  )
}

CardItem.propTypes = {
  logo: PropTypes.node,
  custom: PropTypes.object,
  variants: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  information: PropTypes.string,
  isButton: PropTypes.bool
}

export default CardItem
