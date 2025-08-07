import React from 'react'

const ExpModal = () => {
  return (
     <div className='mt-8 w-full h-[350px] overflow-auto'>
        <div className='w-full mb-4'>
            <label>Role*</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4' placeholder='Enter Role'/>
        </div>

        <div className='w-full mb-4'>
            <label>Company*</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4' placeholder='Enter Company Name'/>
        </div>

        <div className='w-full mb-4'>
            <label>Duration*</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4' placeholder='Enter Duration'/>
        </div>

        <div className='w-full mb-4'>
            <label>Place*</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4' placeholder='Enter Place'/>
        </div>

        <div className='custom-blue flex justify-center items-center w-[10%] py-1 px-3 cursor-pointer rounded-4xl '>Save</div>


    </div>
  )
}

export default ExpModal
