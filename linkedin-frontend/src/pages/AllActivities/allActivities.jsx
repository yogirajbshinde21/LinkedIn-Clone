import React from 'react'
import ProfileCard from '../../components/profileCard/profileCard'
import Advertisement from '../../components/Advertisement/advertisement'
import { useParams } from 'react-router-dom'
import Card from '../../components/Card/card'
import Post from '../../components/Post/post'

const AllActivities = () => {

    const {id} = useParams();

    console.log(id)


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
            <Card padding={1}>
                <div className='text-xl'>All activity</div>
                <div className='cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-[#01754f] text-white font-semibold hover:bg-[#014f35]'>Posts</div>

                <div className='my-2 flex flex-col gap-2'>
                    <div>
                        <Post/>
                    </div>

                    <div>
                        <Post/>
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

export default AllActivities
