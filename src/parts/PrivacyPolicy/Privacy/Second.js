import React from 'react'
import InShorts from './InShort'

const Second = () => {
  return (
    <div id="privacy-policy-2">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">2. How Do We Use Your Information?</h4>

      <div className="space-y-4 mt-4">
        <InShorts text="In Short:  We process your information for purposes based on legitimate business interests, the fulfilment of our contract with you, compliance with our legal obligations, and/or your consent."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.

          We use the information we collect or receive:

          To facilitate account creation and logon process. If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" for further information.

          To post testimonials. We post testimonials on our Services that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at support@tryndx.com and be sure to include your name, testimonial location, and contact information.

          Request feedback. We may use your information to request feedback and to contact you about your use of our Services.

          To enable user-to-user communications. We may use your information in order to enable user-to-user communications with each user's consent.

          To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.`}
        </p>
      </div>
    </div>
  )
}

export default Second
