import React from 'react'
import InShorts from './InShort'

const Third = () => {
  return (
    <div id="privacy-policy-3">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">3. Will Your Information Be Shared With Anyone?</h4>

      <div className="space-y-4 mt-4">
        <InShorts text="In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfil business obligations."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`We may process or share your data that we hold based on the following legal basis:

          Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.

          Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.

          Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfil the terms of our contract.

          Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).

          Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.

          More specifically, we may need to process your data or share your personal information in the following situations:
          Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.

          Other Users. When you share personal information (for example, by posting comments, contributions or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.

          Offer Wall. Our App may display a third-party hosted "offer wall." Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our App and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our App. A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward. Please note that we do not control third-party websites and have no responsibility in relation to the content of such websites. The inclusion of a link towards a third-party website does not imply an endorsement by us of such website. Accordingly, we do not make any warranty regarding such third-party websites and we will not be liable for any loss or damage caused by the use of such websites. In addition, when you access any third-party website, please understand that your rights while accessing and using those websites will be governed by the privacy notice and terms of service relating to the use of those websites.`}
        </p>
      </div>
    </div>
  )
}

export default Third
