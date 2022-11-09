import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

const ExpiredContext = createContext()

const ExpiredProvider = ({ children }) => {
  const [tabActive, setTabActive] = useState('monthly')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ExpiredContext.Provider value={{ tabActive, setTabActive, isModalOpen, setIsModalOpen }}>
      {children}
    </ExpiredContext.Provider>
  )
}

ExpiredProvider.propTypes = {
  initialTheme: PropTypes.string,
  children: PropTypes.node
}

export {
  ExpiredContext, ExpiredProvider
}
