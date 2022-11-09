import PropTypes from 'prop-types'
import React, { createContext } from 'react'
import useHubspotChat from 'utils/useHubspot'

const HubspotContext = createContext()

const HubspotProvider = ({ children }) => {
  const { openHandler, closeHandler, removeHandler, loadHandler } = useHubspotChat(22408044)

  return (
    <HubspotContext.Provider value={{ openHandler, closeHandler, removeHandler, loadHandler }}>
      {children}
    </HubspotContext.Provider>
  )
}

HubspotProvider.propTypes = {
  initialTheme: PropTypes.string,
  children: PropTypes.node
}

export {
  HubspotContext, HubspotProvider
}
