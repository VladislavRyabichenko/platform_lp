import React from 'react'
import InShorts from './InShort'

const Seventh = () => {
  return (
    <div id="privacy-policy-7">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">7. How Do We Keep Your Information Safe?</h4>

      <div className="space-y-4 mt-4">
        <InShorts text="In Short:  We aim to protect your personal information through a system of organizational and technical security measures."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.'}
        </p>
      </div>
    </div>
  )
}

export default Seventh
