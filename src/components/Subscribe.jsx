import React from 'react';

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1 className='py-5 text-[25px]'>Join Our DeFi Community</h1>
        <div className='py-4'>
            <input className='p-1 rounded-3xl mr-6' type="email" placeholder=' Enter your email' />
            <button>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-2 '>
            <input className='mr-2 ' type="checkbox"/>
            <p className='text-[15px]'>Yes, I agree to receive email communications from DeFi.</p>
        </div>
    </div>
  )
}

export default Subscribe