import clsx from 'clsx'
import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import MessageText from 'assets/icon/message-text.svg'
import DocumentText from 'assets/icon/DocumentText'
import SendIcon from 'assets/icon/send-2.svg'

import { Button } from 'components/common'

import Emotion1 from 'assets/svg/emotion/Emotion1'
import Emotion2 from 'assets/svg/emotion/Emotion2'
import Emotion3 from 'assets/svg/emotion/Emotion3'
import Emotion4 from 'assets/svg/emotion/Emotion4'
import Emotion5 from 'assets/svg/emotion/Emotion5'

import { ThemeContext } from 'context/ThemeContext'

import useStyleOverflow from 'utils/useStyleOverflow'

const Feedback = ({ isOpen, setIsOpen }) => {
  useStyleOverflow(isOpen)

  return (
    <div
      className={clsx(
        isOpen ? 'flex z-20' : 'hidden',
        'items-center',
        'backdrop-filter backdrop-blur-[4px]',
        'fixed top-0 bottom-0 left-0 right-0',
        'w-full h-full bg-[#060721B2]/70',
        'px-6 md:px-0',
        'py-[68px] xl:py-[125px]',
        'overflow-scroll'
      )}
    >
      <div className={clsx(
        'relative',
        'm-auto left-0 right-0',
        'bg-white dark:bg-[#15162E]',
        'w-fit h-fit',
        'pt-[72px]',
        'pb-10',
        'px-4 md:px-10',
        'rounded-xl'
      )}>
        <CloseButton onClick={() => setIsOpen(false)}/>

        <Header/>
        <Rate/>
        <Form/>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="w-full md:w-[405px] m-auto left-0 right-0">
      <div className="bg-[#F2B007] rounded-t-2xl rounded-r-2xl w-fit m-auto left-0 right-0 px-4 py-2">
        <img src={MessageText} alt=""/>
      </div>
      <div className="mt-8">
        <h4 className="text-black dark:text-white h4-bold md:h3-bold text-center">Send your feedback</h4>
        <p className="text-black/60 dark:text-white/80 text-s-reguler md:text-m-reguler text-center mt-3 w-full md:w-[340px] m-auto left-0 right-0">Do you have a suggestion or found some bug? Let us know in the field below.</p>
      </div>
    </div>
  )
}

const Rate = () => {
  const [isSelected, setIsSelected] = useState(null)

  return (
    <div className="mt-[60px] md:mt-12">
      <h4 className="text-center sm:text-left text-s-medium text-black dark:text-white">How was your experience?</h4>

      <div className={clsx(
        'flex items-center gap-x-2',
        'mt-2',
        'justify-center sm:justify-start'
      )}>
        <ButtonEmotion isActive={isSelected === 'very-bad'} emoticon={Emotion1} label="Very Bad" onClick={() => setIsSelected('very-bad')} />
        <ButtonEmotion isActive={isSelected === 'bad'} emoticon={Emotion2} label="Bad" onClick={() => setIsSelected('bad')}/>
        <ButtonEmotion isActive={isSelected === 'neutral'} emoticon={Emotion3} label="Neutral" onClick={() => setIsSelected('neutral')}/>
        <ButtonEmotion isActive={isSelected === 'good'} emoticon={Emotion4} label="Good" onClick={() => setIsSelected('good')}/>
        <ButtonEmotion isActive={isSelected === 'very-good'} emoticon={Emotion5} label="Very Good" onClick={() => setIsSelected('very-good')}/>
      </div>
    </div>
  )
}

const ButtonEmotion = ({ isActive, children, emoticon: Emoticon, label, onClick }) => {
  const [isHover, setIsHover] = useState(false)
  const { theme } = useContext(ThemeContext)

  return (
    <Button
      className="relative h-fit w-fit"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Emoticon
        fillColor={isActive || isHover ? '#FFCA28' : (theme === 'dark' ? 'white' : '#060721')}
        fillOpacity={isActive || isHover ? '1' : (theme === 'dark' ? '0.2' : '0.08')}
      />
      <p className={clsx(
        'absolute whitespace-nowrap bottom-[-20px] text-black/60 dark:text-white',
        isHover ? 'block' : 'hidden'
      )}>{label}</p>
    </Button>
  )
}

const Form = () => {
  const [selected, setSelected] = useState('bug')

  const handleChange = event => {
    setSelected(event.target.value)
  }

  return (
    <form className="mt-14">
      <div className={clsx(
        'bg-black/[0.02] dark:bg-white/[0.06] rounded-xl px-4 py-[14px]',
        'w-full md:w-[682px]'
      )}>
        <div className="flex items-start gap-x-2">
          <DocumentText className="stroke-black dark:stroke-white"/>
          <textarea rows={5} className="w-full text-s-reguler text-black dark:text-white dark:placeholder:text-white/[0.32] bg-transparent focus:outline-none" placeholder="Describe your experience here..."></textarea>
        </div>

        <div className="flex gap-x-6 mt-3">
          <InputRadio id="bug" label="Bug" checked={selected === 'bug'} onChange={handleChange}/>
          <InputRadio id="suggestion" label="Suggestion" checked={selected === 'suggestion'} onChange={handleChange}/>
          <InputRadio id="others" label="Others" checked={selected === 'others'} onChange={handleChange}/>
        </div>
      </div>

      <Button className="bg-[#2160DC] w-fit h-fit px-6 py-[14px] mt-6 text-s-bold text-white">
        <p>Send Feedback</p>
        <img src={SendIcon} alt=""/>
      </Button>
    </form>
  )
}

const InputRadio = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex gap-x-2">
      <input type="radio" name="feedbackType" id={id} value={id} checked={checked} onChange={onChange} />
      <label htmlFor={id} className="text-s-reguler text-black/60 dark:text-white/80">{label}</label>
    </div>
  )
}

const CloseButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={clsx(
        'w-fit h-fit',
        'absolute',
        'top-4 md:top-5',
        'right-4 md:right-5'
      )}
    >
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0013 29.8337C23.3651 29.8337 29.3346 23.8641 29.3346 16.5003C29.3346 9.13653 23.3651 3.16699 16.0013 3.16699C8.63751 3.16699 2.66797 9.13653 2.66797 16.5003C2.66797 23.8641 8.63751 29.8337 16.0013 29.8337Z" fill="white" fillOpacity="0.06" />
        <path d="M20 12.5L12 20.5" stroke="#70717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12.5L20 20.5" stroke="#70717F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Button>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func
}

ButtonEmotion.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
  emoticon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func
}

InputRadio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

Feedback.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

export default Feedback
