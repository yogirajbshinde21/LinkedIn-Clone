import React from 'react'
import Advertisement from '../../components/Advertisement/advertisement'
import ProfileCard from '../../components/profileCard/profileCard'
import Card from '../../components/Card/card'

const Notification = () => {
  return (
    <div className="flex w-full gap-5 px-5 mt-5 bg-gray-100 xl:px-50 py-9">
      {/* left side */}
      <div className="w-[21%] sm:block sm:w-[23%] hidden py-5">
        <div className="h-fit">
          <ProfileCard />
        </div>
      </div>

      {/* middle side */}
      <div className="w-[100%] py-5 sm:w-[50%]">
        <div>
          <Card padding={0}>
              <div className='w-full'>
                {/* For each notification */}
                <div className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-2 hover:bg-gray-400/20 text-md`}>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" className='rounded-4xl cursor-pointer w-15 h-15 object-cover' />
                    <div>Dummy User has sent you friend request</div>
                </div>

                {/* For each notification */}
                <div className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3 hover:bg-gray-400/20 text-md`}>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" className='rounded-4xl cursor-pointer w-15 h-15 object-cover' />
                    <div>Dummy User has commented on your post</div>
                </div>

                {/* For each notification */}
                <div className={`border-b-1 cursor-pointer flex gap-4 items-center border-gray-300 p-3 hover:bg-gray-400/20 text-md`}>
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" className='rounded-4xl cursor-pointer w-15 h-15 object-cover' />
                    <div>Dummy User has sent you friend request</div>
                </div>
              </div>
          </Card>
        </div>
      </div>

      {/* right side */}
      <div className="w-[26%] py-5 hidden md:block">
        <div className="sticky my-5 top-19">
          <Advertisement />
        </div>
      </div>

    </div>
  )
}

export default Notification
