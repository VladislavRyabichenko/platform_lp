import React from 'react'
import InShorts from './InShort'

const Eighth = () => {
  return (
    <div id="privacy-policy-8">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">8. Do We Collect Information From Minors?</h4>

      <div className="space-y-4 mt-4">
        <InShorts text="In Short:  We do not knowingly collect data from or market to children under 18 years of age."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {'We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at support@tryndx.com.'}
        </p>
      </div>
    </div>
  )
}

export default Eighth
