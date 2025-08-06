import React from "react";

const Conversation = () => {
  return (
    <div className="flex items-center w-full cursor-pointer border-b-1 border-gray-300 gap-3 p-4 hover:bg-gray-200">
      <div className="shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSjZ8OpsHWIsWGwezk71cwYVH59vv9Ny90A&s"
          className="rounded-full h-12 w-12 cursor-pointer object-cover"
        />
      </div>
      <div>
        <div className="text-md">Sam</div>
        <div className="text-sm text-gray-500">Engineer @Amazon</div>
      </div>
    </div>
  );
};

export default Conversation;
