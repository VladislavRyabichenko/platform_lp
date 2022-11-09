import React from 'react'
import Description from '../components/Description'
import Title from '../components/Title'

const ChangesTermsConditions = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>Changes to These Terms and Conditions</Title>
      <Description>
        {`We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

        By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.`}
      </Description>
    </div>
  )
}

export default ChangesTermsConditions
