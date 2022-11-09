import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'components/common'

import { ThemeContext } from 'context/ThemeContext'

const BrokerItem = ({ id, name }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-4">
        <img className="w-12 h-12" src={require(`assets/img/broker/${theme}/${id}.png`)}/>
        <p className="text-s-bold md:text-l-medium text-black dark:text-white">{name}</p>
      </div>

      <Button className="w-fit h-12 bg-[#2160DC] text-s-bold text-white rounded-xl px-6">
        Connect
      </Button>
    </div>
  )
}

BrokerItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string
}

export default BrokerItem
