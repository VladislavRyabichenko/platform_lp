import React from 'react'
import InShorts from './InShort'

const Fifth = () => {
  return (
    <div id="privacy-policy-5">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">5. How Do We Handle Your Social Logins?</h4>

      <div className="space-y-4 mt-4">
        <InShorts text="In Short:  If you choose to register or log in to our services using a social media account, we may have access to certain information about you."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`Our Services offers you the ability to register and login using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, profile picture as well as other information you choose to make public on such social media platform.

          We will use the information we receive only for the purposes that are described in this privacy notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.`}
        </p>
      </div>
    </div>
  )
}

export default Fifth
