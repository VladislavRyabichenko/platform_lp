import React from 'react'

const DotsBackground = () => {
  const dots = []
  for (let i = 0; i < 3750; i++) {
    dots.push(
      <div className='dot'/>
    )
  }

  return (
    <>
      <div className="dots">
        {dots}
      </div>
    </>
  )
}

export default DotsBackground
