import React from 'react'
import InShorts from './InShort'

const Sixth = () => {
  return (
    <div id="privacy-policy-6">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">6. How Long Do We Keep Your Information?</h4>

      <div className="space-y-4 mt-4">
        <InShorts text="In Short:  We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.

          When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.`}
        </p>
      </div>
    </div>
  )
}

export default Sixth
