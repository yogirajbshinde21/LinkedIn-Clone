import React from 'react'
import Advertisement from '../../components/Advertisement/advertisement'

const Resume = () => {
  return (
    <div className='flex w-full gap-5 px-5 mt-5 bg-gray-100 xl:px-50 py-9'>
      <div className='w-[100%] py-5 md:w-[74%]'>
        {/* Resume Image */}
        <img className='w-full h-full object-cover rounded-lg border-1 border-[#0A66C2]' src="/src/assets/Yogiraj Offline MERN Resume LinkedIn.jpg" />
      </div>

    <div className='w-[26%] py-5 hidden md:block'>
        <div className='sticky top-19'>
            <Advertisement/>
        </div>
    </div>

    </div>


  )
}

export default Resume
