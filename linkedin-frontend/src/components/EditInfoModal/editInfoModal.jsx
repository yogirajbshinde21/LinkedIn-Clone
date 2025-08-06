import React from 'react'

const EditInfoModal = () => {
  return (
    <div className='mt-8 w-full h-[350px] overflow-auto'>
        <div className='w-full mb-4'>
            <label>Full Name*</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4' placeholder='Enter Full Name'/>
        </div>


        <div className='w-full mb-4'>
            <label>Headline*</label>
            <br />
            <textarea className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4 resize-none' cols={10} rows={3}></textarea>
        </div>


        <div className='w-full mb-4'>
            <label>Current Company*</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4' placeholder='Enter Current Company'/>
        </div>

        <div className='w-full mb-4'>
            <label>Current Location*</label>
            <br />
            <input type="text" className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4' placeholder='Enter Current Location'/>
        </div>

        <div className='custom-blue flex justify-center items-center w-[10%] py-1 px-3 cursor-pointer rounded-4xl '>Save</div>
    </div>
  )
}

export default EditInfoModal
