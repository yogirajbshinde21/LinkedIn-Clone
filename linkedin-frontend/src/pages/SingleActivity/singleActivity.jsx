import React from "react";
import ProfileCard from "../../components/profileCard/profileCard";
import Card from "../../components/Card/card";
import Advertisement from "../../components/Advertisement/advertisement";
import Post from "../../components/Post/post";

const SingleActivity = () => {
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
              <Post />
            </div>
        </div>


      {/* right side */}
      <div className="w-[26%] py-5 hidden md:block">
        <div className="sticky my-5 top-19">
          <Advertisement />
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;
