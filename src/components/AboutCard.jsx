import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border text-left rounded-2xl py-10 px-8'>
    <div>
      <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
        {props.icon}
      </div>
      <h3 className='text-xl font-bold py-5 text-[18px]'>{props.heading}</h3>
      <p className='text-[15px]'>
        {props.text}
      </p>
    </div>
  </div>
  )
}

export default AboutCard