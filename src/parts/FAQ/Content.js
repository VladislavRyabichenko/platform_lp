import clsx from 'clsx'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import FAQButton from './FAQButton'
import FAQItem from './FAQItem'

import { StaggerChildren, FadeIn } from 'animation'

const Content = () => {
  const [faqOpen, setFaqOpen] = useState('general')
  const [itemOpen, setItemOpen] = useState(0)

  const handleFaqButton = (value) => {
    setFaqOpen(value)
  }

  const handleItemOpen = (value) => {
    if (itemOpen === value) {
      return setItemOpen(-1)
    }
    return setItemOpen(value)
  }

  const faqItemArr = {
    general: [
      {
        title: 'Does TRYNDx integrate with 3rd party apps ?',
        description: 'Yes, we do integrate with most of the well-trusted platforms for the purpose of integrations to supply data.'
      },
      {
        title: 'What is the difference between an Expert Trader & a Mentor ?',
        description: 'Expert Traders are those traders with a sustainable growth in their accounts that provides valuable services based on their field of expertise to any subscriber. The fees will be payable in monthly / annual basis. However, Mentors, are classified as consultants who can provide their private recommendations and consultations in hourly basis for each user on their overall performance as shown in their Dashboard.'
      },
      {
        title: 'How can I enroll to be Expert Trader / Mentor ?',
        description: `To be eligible to enroll as Expert Trader or Mentor or for both, first you would require to connect your Stock Broker account to be Verified.
        All the supported Stock Brokers list can be found here (“”). To connect with your Stock Broker you can access your main Dashboard page, then at the top right corner click on “Add Trades” then choose “Connect your Stock Broker”. Once you are successfully connected, you can apply either from Expert Trader’s page or Mentors page from the top right corner where it is highlighted.`
      }
    ],
    'free-trial': [
      {
        title: 'How does the (7 days/month) free trial work ?',
        description: 'During first time registration, we don’t ask for any Credit Card information and deduct any payment/fees to try all of our unique services.'
      },
      {
        title: 'What happens after my free trial ends ?',
        description: 'After the end of the free trial, we suggest that you subscribe to one of our pricing plan at this link (“”) or access will be limited to only Trader’s Community page.'
      },
      {
        title: 'Can I upgrade or downgrade / switch plans at any time ?',
        description: 'Yes, you can upgrade at any time even during the current subscribed plan. The new features will be accessible once the new upgrade has been activated.'
      },
      {
        title: 'What’s included in my trial plan ?',
        description: 'During the 7-day free trial, you will access all the special services we provide with no limitations. Upon the end of the free trial, you will be directed to our pricing plan to continue using all the features or your access will only be limited to Trader’s Community.'
      },
      {
        title: 'Do I have to sign a long-term contract ?',
        description: 'Not at all, we provide our services via a monthly or annually subscription based. Please refer to our pricing plan page here (“”)'
      }
    ],
    pricing: [
      {
        title: 'What kinds of payment do you accept ?',
        description: 'We accept all type of payments including but not limited to Visa, Mastercard, Paypal, AMEX, Apple Pay, Google Pay …etc'
      },
      {
        title: 'Do I need to enter my credit card info to sign up ?',
        description: 'Yes, in order to subscribe for all or any of our services you would need to provide a valid credit card.'
      },
      {
        title: 'Are there any setup fees ?',
        description: 'No, we don’t have any set-up fees.'
      },
      {
        title: 'Are there any hidden fees ?',
        description: 'No, we don’t have any hidden fees.'
      },
      {
        title: 'Can I pay quarterly ?',
        description: 'We provide 2 payment options. The first option will be via monthly payments for Pro and Premium packages. The second option will be billed annually with 20% discount and free 2 months subscriptions for Premium+ package. For more reference please refer to the Pricing page at (“”)'
      },
      {
        title: 'Can I pay annually ?',
        description: 'Yes, you can pay annually and have the advantage for a free 2 months of subscriptions and 20% discount for Premium+ package. For more reference please refer to the Pricing page at (“”)'
      }
    ],
    security: [
      {
        title: 'Will my data be private and safe ?',
        description: 'Yes, we are taking Security and the Privacy of our user very seriously. We use bank level security and we never store the credentials of our users on our servers as they will be encrypted.'
      },
      {
        title: 'What kind of security you are using ?',
        description: 'We are using a very high level for Data Security Standards and obtained top Security compliance and certificates i.e. PCI-DSS and SSL.'
      }
    ],
    refunds: [
      {
        title: 'Can I cancel my subscriptions at any time ?',
        description: 'Yes, you can cancel your subscriptions at any time. However, you still can use your current subscriptions until it expires.'
      },
      {
        title: 'What is your Refunds policy ?',
        description: 'Please refer to the following reference link at (“”)'
      },
      {
        title: 'Can I cancel my account at any time ?',
        description: 'Yes, you can cancel your account at any time.'
      }
    ]
  }

  return (
    <section className={clsx(
      'flex',
      'flex-col',
      'justify-between',
      'mb-10 md:mb-16 xl:mb-[100px]',
      'px-6 md:px-10 xl:px-[140px]',
      'max-w-[1440px]',
      'm-auto left-0 right-0',
      'min-h-[1200px] md:min-h-[712px] xl:min-h-[884px]'
    )}>
      <motion.div
        custom={{ staggerChildren: 0.3, delayChildren: 1.75 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={StaggerChildren}
        className={clsx(
          'flex',
          'flex-col sm:flex-row',
          'justify-center',
          'gap-x-6 xl:gap-x-8',
          'gap-y-6'
        )}
      >
        <motion.div
          custom={{ xStart: -50, duration: 0.8 }}
          variants={FadeIn}
          className={clsx(
            'space-y-4 bg-black/[0.02] dark:bg-white/[0.06] rounded-2xl',
            'sm:w-[300px] xl:w-[365px]',
            'p-4 xl:p-8',
            'h-fit'
          )}
        >
          <FAQButton text="General Products" count={3} isActive={faqOpen === 'general'} onClick={() => handleFaqButton('general')} />
          <FAQButton text="Free Trials" count={5} isActive={faqOpen === 'free-trial'} onClick={() => handleFaqButton('free-trial')}/>
          <FAQButton text="Pricing & Payment" count={6} isActive={faqOpen === 'pricing'} onClick={() => handleFaqButton('pricing')}/>
          <FAQButton text="Security" count={2} isActive={faqOpen === 'security'} onClick={() => handleFaqButton('security')}/>
          <FAQButton text="Refunds & Cancellations" count={3} isActive={faqOpen === 'refunds'} onClick={() => handleFaqButton('refunds')}/>
        </motion.div>

        <motion.div
          custom={{ xStart: 50, duration: 0.8 }}
          variants={FadeIn}
          className={clsx(
            'bg-black/[0.02] dark:bg-white/[0.06] rounded-2xl h-fit',
            'p-6 xl:p-8',
            'sm:w-[430px] xl:w-[763px]'
          )}
        >
          {faqItemArr[faqOpen].map((item, index) => {
            return (
              <FAQItem
                key={index}
                isActive={itemOpen === index}
                onClick={() => handleItemOpen(index)}
                title={item.title}
                description={item.description}
              />
            )
          })}
        </motion.div>
      </motion.div>

      <p className="text-m-reguler text-black/60 dark:text-white/[0.56] text-center">Still have questions? <a className="text-primary-500 text-m-bold" href="mailto:support@tryndx.com">Lets talk</a></p>
    </section>
  )
}

export default Content
