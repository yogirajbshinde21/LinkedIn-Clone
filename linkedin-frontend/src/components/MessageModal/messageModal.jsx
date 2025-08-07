import React from 'react'

const MessageModal = () => {
  return (
    <div className='my-5'>
      <div className='w-full mb-4'>
            <textarea className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4 resize-none' placeholder='Enter message' cols={10} rows={11}></textarea>
        </div>

        <div className='custom-blue flex justify-center items-center w-[10%] py-1 px-3 cursor-pointer rounded-4xl '>Send</div>
    </div>
  )
}

export default MessageModal
