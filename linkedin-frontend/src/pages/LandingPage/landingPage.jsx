import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLoginComp from '../../components/GoogleLogin/googleLoginComp'

const LandingPage = () => {
  return (
    <div className='my-4 py-[50px] md:pl-[120px] px-5 md:flex justify-between'>
        <div className='md:w-[40%]'>
            <div className='text-4xl mx-auto text-gray-500'>
                Welcome to Your Professional Community
            </div>

            <div className='my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer'>
                <GoogleLoginComp/>
            </div>

            <Link to={'/login'} className='flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl items-center w-[70%] justify-center text-black hover:bg-gray-100 border-2 cursor-pointer'>Sign in with email</Link>

            <div className='mx-auto mb-4 text-sm w-[70%] mt-6'>By clicking Continue to join or sign in, you agree to <span className='text-blue-800 cursor-pointer hover:underline'>LinkedIn's User Agreement </span>, <span className='text-blue-800 cursor-pointer hover:underline'>Privacy Policy</span>, and <span className='text-blue-800 cursor-pointer hover:underline'>Cookie Policy</span>.</div>
       
            <div to={'/signup'} className='mx-auto text-center mb-4 text-lg w-[70%] mt-4'>New to LinkedIn? <Link to={'/signup'}><span className='text-blue-800 cursor-pointer hover:underline'>Join now</span></Link></div>
        </div>

        <div className='md:w-[50%] h-120'>
            <img src={'https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png'} alt="image" className='w-full h-full object-contain'/>
        </div>
    </div>
  )
}

export default LandingPage
