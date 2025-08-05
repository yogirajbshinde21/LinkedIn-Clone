import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Modal = ({title, children, closeModal}) => {
  return (
    <div className='bg-black/50 fixed top-0 left-0 inset-0 z-20 flex justify-center items-center'>
        <div className='w-[95%] md:w-[50%] h-[500px] bg-white rounded-xl p-10'>
            <div className='flex justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className='text-2xl'>{title}</div>
                </div>
                <div onClick={()=>closeModal()} className='cursor-pointer'><CloseOutlinedIcon/></div>
            </div>
            {children}
        </div> 
    </div>
  )
}

export default Modal
