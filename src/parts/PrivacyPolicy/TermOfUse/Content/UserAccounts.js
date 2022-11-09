import React from 'react'
import Description from '../components/Description'
import Title from '../components/Title'

const UserAccounts = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <Title>User Accounts</Title>
      <Description>
        {`When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.

        You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.
        You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.

        You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.`}
      </Description>
    </div>
  )
}

export default UserAccounts
