import React from 'react'
import InShorts from './InShort'

const First = () => {
  return (
    <div id="privacy-policy-1">
      <h4 className="text-l-bold md:h4-bold text-black dark:text-white">1. What Information Do We Collect?</h4>

      <div className="space-y-4 mt-4">
        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56]">Personal information you disclose to us</p>

        <InShorts text="In Short:  We collect personal information that you provide to us."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services (such as by posting messages in our online forums or entering competitions, contests or giveaways) or otherwise when you contact us.

          The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following:

          Personal Information Provided by You. We collect names; phone numbers; email addresses; usernames; passwords; debit/credit card numbers; portfolio performance's info; and other similar information.

          Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
          All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.

          Information automatically collected`}
        </p>

        <InShorts text="In Short:  Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.

          Like many businesses, we also collect information through cookies and similar technologies.
          The information we collect includes:

          Log and Usage Data. Log and usage data is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).

          Device Data. We collect device data such as information about your computer, phone, tablet or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.
          Information collected through our App
          
          `}
        </p>

        <InShorts text="In Short:  We collect information regarding your mobile device, push notifications, when you use our App."/>

        <p className="text-s-reguler md:text-m-reguler text-black dark:text-white/[0.56] whitespace-pre-line">
          {`If you use our App, we also collect the following information:

          Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device's social media accounts, calendar, reminders, data, and other features. If you wish to change our access or permissions, you may do so in your device's settings.

          Mobile Device Data. We automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our App, we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID and information about the features of our App you accessed.

          Push Notifications. We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.

          This information is primarily needed to maintain the security and operation of our App, for troubleshooting and for our internal analytics and reporting purposes.`}
        </p>

      </div>
    </div>
  )
}

export default First
