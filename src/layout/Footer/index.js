import React from 'react'
import PropTypes from 'prop-types'

// import CTADownload from './CTADownload'
import FooterBottom from './FooterBottom'

const Footer = ({ setIsOpenFeedBack }) => {
  return (
    <footer>
      {/* <CTADownload/> */}
      <FooterBottom setIsOpenFeedBack={setIsOpenFeedBack}/>
    </footer>
  )
}

Footer.propTypes = {
  setIsOpenFeedBack: PropTypes.bool
}

export default Footer
