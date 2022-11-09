import React from 'react'
import InShorts from './InShort'

const Fourth = () => {
  return (
    <div id="privacy-policy-4">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">4. Do We Use Cookies And Other Tracking Technologies?</h4>

      <div className="space-y-4 mt-4">
        <InShorts text="In Short:  We may use cookies and other tracking technologies to collect and store your information."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice'}
        </p>
      </div>
    </div>
  )
}

export default Fourth
