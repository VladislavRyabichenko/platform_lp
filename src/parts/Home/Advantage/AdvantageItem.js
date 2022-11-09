import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const AdvantageItem = ({ custom, variants, className, index, icon, title, desc }) => {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      className={clsx(
        'w-full sm:w-[365px] space-y-8 rounded-lg',
        'p-6 md:p-8',
        'min-h-[244px] md:min-h-[264px]',
        className
      )}
      style={{
        background: 'linear-gradient(93.53deg, rgba(130, 154, 241, 0.7) 24.77%, rgba(96, 102, 235, 0.7) 100%)'
      }}
    >
      <div className="flex justify-between items-center">
        <img src={icon} alt=""/>
        <p className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.06] text-m-medium text-white">{index}</p>
      </div>
      <div className="space-y-3">
        <h4 className="text-l-bold md:h4-bold text-white">{title}</h4>
        <p className="text-s-reguler text-white/[0.8]">{desc}</p>
      </div>
    </motion.div>
  )
}

AdvantageItem.propTypes = {
  custom: PropTypes.object,
  variants: PropTypes.object,
  className: PropTypes.string,
  index: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  icon: PropTypes.node
}

export default AdvantageItem
