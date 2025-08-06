import React from "react";
import Card from "../../components/Card/card";
import { ArrowDropDown } from "@mui/icons-material";
import Conversation from "../../components/Conversation/conversation";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Advertisement from "../../components/Advertisement/advertisement";

const Messages = () => {
  return (
    <div className="flex w-full gap-5 px-5 mt-5 bg-gray-100 xl:px-50 py-9">
      <div className="w-full justify-between flex pt-5">
        {/* left side */}
        <div className="w-full md:w-[70%]">
          <Card padding={0}>
            <div className="border-b-1 border-gray-300 px-5 py-2 font-semibold text-lg">
              Messages
            </div>
            <div className="border-b-1 border-gray-300 px-5 py-2">
              <div className="py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white">
                Focused <ArrowDropDown />
              </div>
            </div>

            {/* div for chat */}
            <div className="w-full md:flex">
              {/* left side of chat section */}
              <div className="h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400">
                {" "}
                {/* overflow-auto ---> Enables scrolling if required */}
                {/* For each chat */}
                <Conversation />
              </div>

              {/* right side of chat section */}
              <div className="w-full md:w-[60%] border-gray-400">
                {/* Top most user info div */}
                <div className="border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center">
                  <div>
                    <div className="text-sm font-semibold">User 1</div>
                    <p className="text-sm text-gray-400">Hi This is user 1</p>
                  </div>
                  <div>
                    <MoreHorizIcon className="cursor-pointer" />
                  </div>
                </div>

                {/* bottom chat window */}
                <div className="h-[360px] w-full overflow-auto border-b-1 border-gray-300">
                  {/* User Info div in bottom chat window */}
                  <div className="w-full border-b-1 border-gray-300 gapp-3 p-4">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSjZ8OpsHWIsWGwezk71cwYVH59vv9Ny90A&s"
                      className="rounded-full h-16 w-16 cursor-pointer object-cover"
                    />

                    <div className="my-2">
                      <div className="text-md">User 1</div>
                      <div className="text-sm text-gray-500">
                        Hi this is user 1
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    {/* For each messages */}
                    <div className="flex w-full cursor-pointer border-gray-300 gap-3 p-4">
                      <div className="shrink-0">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSjZ8OpsHWIsWGwezk71cwYVH59vv9Ny90A&s"
                          className="rounded-full h-8 w-8 cursor-pointer object-cover"
                        />
                      </div>
                      <div className="mb-2 w-full">
                           <div className="text-md">User 1</div> 
                           <div className="text-sm mt-6 hover:bg-gray-200">This is text message</div>
                           <div className="my-2"><img className="w-[240px] h-[180px] rounded-sm object-cover" src="https://cdn.pixabay.com/photo/2023/07/19/12/40/trees-8136806_640.png"/></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* This space for typing messgaes */}
                <div className="p-2 w-full border-b-1 border-gray-200">
                    <textarea rows={4} className="bg-gray-200 outline-0 rounded-xl text-sm w-full p-3 resize-none" placeholder="Write a message"></textarea>
                </div>
                <div className="p-3 flex justify-between">
                    <div>
                        <label htmlFor="messageImage" className="cursor-pointer"><InsertPhotoIcon/></label>
                        <input id="messageImage" type='file' className="hidden"/>
                    </div>
                    <div className='py-1 px-3 text-white cursor-pointer rounded-2xl custom-blue h-7 w-15 flex items-center justify-center font-semibold'>Send</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* right side */}
        <div className="hidden md:flex md:w-[25%]">
            <div className="sticky top-19">
                <Advertisement/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
