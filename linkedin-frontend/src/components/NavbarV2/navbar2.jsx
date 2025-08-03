import React, { useState } from "react";
import "./navbar2.css";
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BusinessCenter } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const Navbar2 = () => {
  const [dropdown, setDropDown] = useState(false);
  const location = useLocation();

  console.log(location)

  return (
    <div className="bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-[100%] z-1000">
      <div className="flex gap-2 items-center">
        <div>
          <img
            className="w-8 h-8"
            src={"/src/assets/linkedin.png"}
            alt="logo"
          />
        </div>

        <div className="relative">
          <input
            type="text"
            className="searchInput w-70 bg-gray-100 rounded-sm h-10 px-4"
            placeholder="Search"
          />

          {dropdown && (
            <div className="absolute w-88 left-0 bg-gray-200">
              <div className="flex gap-2 mb-1 items-center cursor-pointer">
                <div>
                  {" "}
                  <img
                    src="https://avatars.githubusercontent.com/u/84953719?v=4"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div>Yogiraj Shinde</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="hidden gap-10 md:flex">
          <div className="flex flex-col items-center cursor-pointer">
            <HomeIcon sx={{color: location.pathname === '/feeds' ? "black": "gray"}}/>
            <div className={`text-sm text-gray-500 ${location.pathname==='/feeds' ? 'border-b-3' : ''}`}>Home</div>
          </div>

           <div className="flex flex-col items-center cursor-pointer">
            <GroupsIcon sx={{color: location.pathname === '/mynetwork' ? "black": "gray"}}/>
            <div className={`text-sm text-gray-500 ${location.pathname==='/mynetwork' ? 'border-b-3' : ''}`}>My Network</div>
          </div>

           <div className="flex flex-col items-center cursor-pointer">
            <BusinessCenterIcon sx={{color: location.pathname === '/resume' ? "black": "gray"}}/>
            <div className={`text-sm text-gray-500 ${location.pathname==='/resume' ? 'border-b-3' : ''}`}>Resume</div>
          </div>

           <div className="flex flex-col items-center cursor-pointer">
            <MessageIcon sx={{color: location.pathname === '/messages' ? "black": "gray"}}/>
            <div className="{`text-sm text-gray-500 ${location.pathname==='/messages' ? 'border-b-3' : ''}`}">Message</div>
          </div>

           <div className="flex flex-col items-center cursor-pointer">
            <div><NotificationsIcon sx={{color: location.pathname === '/notifications' ? "black": "gray"}}/><span className="p-1 rounded-full text-sm bg-red-700 text-white">1</span></div>
            <div className="{`text-sm text-gray-500 ${location.pathname==='/notifications' ? 'border-b-3' : ''}`}">Notifications</div>
          </div>

          <div className="flex flex-col items-center cursor-pointer">
            <img className="w-6 h-6 rounded-full" src="https://avatars.githubusercontent.com/u/84953719?v=4" />
            <div className="text-sm text-gray-500">Me</div>
          </div>
      </div>
    </div>
  );
};

export default Navbar2;
