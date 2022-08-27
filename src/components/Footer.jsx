import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-5'>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Quick Links</h3>
                <ul>
                    <li>Plaform</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Extra Links</h3>
                <ul>
                    <li>My Account</li>
                    <li>Ask Questions</li>
                    <li>Terms Of Use</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Contact info</h3>
                <ul>
                    <li>+0201068978663</li>
                    <li>+0201110689678</li>
                    <li>Abdalla@gmail.com</li>
                    <li>Cairo, Egypt</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Follow Us</h3>
                <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
                <ul>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token List</li>
                    <li>Defi</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer