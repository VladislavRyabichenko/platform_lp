import React from 'react'
import Description from '../components/Description'
import Title from '../components/Title'

const LinksOtherWebsites = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Links to Other Websites</Title>
      <Description>
        {`Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
        The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

        We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.`}
      </Description>
    </div>
  )
}

export default LinksOtherWebsites
