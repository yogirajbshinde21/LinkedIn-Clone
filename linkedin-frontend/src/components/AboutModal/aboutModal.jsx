import React from 'react'

const AboutModal = () => {
  return (
    <div className='my-4'>
      <div className='w-full mb-4'>
            <label>About*</label>
            <br />
            <textarea className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4 resize-none' cols={10} rows={3}></textarea>
        </div>

        <div className='w-full mb-4'>
            <label>Skills* <span className='text-sm text-gray-700'>(Add by separating comma)</span></label>
            <br />
            <textarea className='p-2 mt-1 w-full border-1 rounded-md focus:bg-black/4 hover:bg-black/4 resize-none' cols={10} rows={3}></textarea>
        </div>
        
        <div className='w-full mb-2'>
           <label htmlFor="resumeUpload" className='cursor-pointer p-2 px-3 border rounded-4xl h-[95%] w-fit flex justify-center border-[#0B63BD] text-[#0B63BD] hover:border-2 hover:font-bold hover:bg-[#0B63BD]/9 font-semibold'>Upload Resume</label>
           <input type="file" className='hidden' id='resumeUpload' />
           <div className='my-1'>this is url of file</div>
        </div>

        <div className='custom-blue flex justify-center items-center w-[10%] py-1 px-3 cursor-pointer rounded-4xl '>Save</div>
        
    </div>
  )
}

export default AboutModal
