import React, { useState } from 'react'
import ProfileCard from '../../components/profileCard/profileCard';

const MyNetwork = () => {

    const [text, setText] = useState('Catch Up with Friends');

    const handleFriends = async() => {
        setText('Catch Up with Friends');
    }
    const handlePending = async() => {
        setText('Pending Request');
    }

  return (
    <div className='flex flex-col w-full gap-5 px-5 mt-5 bg-gray-100 xl:px-50 py-9'>
      <div className='py-4 px-10 bordrer-1 border-gray-400 w-full flex justify-between my-5 text-xl bg-white rounded-xl items-center'>
        <div>{text}</div>
        <div className='flex gap-3'>
            <button onClick={handleFriends} className={`p-1 border-1 rounded-lg border-gray-300 h-10 w-fit items-center flex cursor-pointer ${text === 'Catch Up with Friends' ? 'custom-blue text-white' : ''}`}>Friends</button>
            <button onClick={handlePending} className={`p-1 border-1 rounded-lg border-gray-300 h-10 w-fit items-center flex cursor-pointer ${text === 'Pending Request' ? 'custom-blue text-white' : ''}`}>Pending Request</button>
        </div>
      </div>

      <div className='flex h-[80vh] w-full gap-7 flex-wrap items-start justify-center'>
        <div className='md:w-[23%] h-[270px] sm:w-full'>
            <ProfileCard/>
        </div>
        <div className='md:w-[23%] h-[270px] sm:w-full'>
            <ProfileCard/>
        </div>
        <div className='md:w-[23%] h-[270px] sm:w-full'>
            <ProfileCard/>
        </div>
        <div className='md:w-[23%] h-[270px] sm:w-full'>
            <ProfileCard/>
        </div>
      </div>
    </div>
  )
}

export default MyNetwork
