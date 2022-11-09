import { useState, useRef, useEffect, useCallback } from 'react'

const useHubspotChat = (portalId) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [activeConversation, setActiveConversation] = useState(false)
  const eventRef = useRef(null)

  useEffect(() => {
    // Add event listener.
    window.hsConversationsOnReady = [() => {
      setHasLoaded(true)
    }]

    // Create script component.
    const script = document.createElement('script')
    script.src = `//js.hs-scripts.com/${portalId}.js`
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      window.hsConversationsOnReady = []
    }
  }, [])

  // Subscripe to conversation events.
  useEffect(() => {
    eventRef.current = (payload) => {
      setActiveConversation(payload.conversation.conversationId)
    }

    if (hasLoaded) {
      window.HubSpotConversations.on('conversationStarted', eventRef.current)
    }

    return () => {
      window.HubSpotConversations.off('conversationStarted', eventRef.current)
    }
  }, [hasLoaded])

  // Events Handle Use Callback
  const openHandler = useCallback(() => {
    if (hasLoaded) {
      window.HubSpotConversations.widget.open()
    }
  }, [hasLoaded])

  const closeHandler = useCallback(() => {
    if (hasLoaded) {
      window.HubSpotConversations.widget.close()
    }
  }, [hasLoaded])

  const removeHandler = useCallback(() => {
    if (hasLoaded) {
      window.HubSpotConversations.widget.remove()
    }
  }, [hasLoaded])

  const loadHandler = useCallback(() => {
    if (hasLoaded) {
      window.HubSpotConversations.widget.load()
    }
  }, [hasLoaded])

  return {
    hasLoaded,
    activeConversation,
    openHandler,
    closeHandler,
    removeHandler,
    loadHandler
  }
}

export default useHubspotChat
