import React, { useState } from "react";
import Advertisement from "../../components/Advertisement/advertisement";
import Card from "../../components/Card/card";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Post from "../../components/Post/post";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/Modal/modal";
import ImageModal from "../../components/ImageModal/imageModal";
import EditInfoModal from "../../components/EditInfoModal/editInfoModal";
import AboutModal from "../../components/AboutModal/aboutModal";
import ExpModal from "../../components/ExpModal/expModal";
import MessageModal from "../../components/MessageModal/messageModal";

const Profile = () => {
  const [imageSetModal, setImageModal] = useState(false);
  const [circularImage, setCircularImage] = useState(true);
  const [infoModal, setInfoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [expModal, setExpModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const handleMessageModal = () => {
    setMessageModal((prev) => !prev);
  };

  const handleExpModal = () => {
    setExpModal((prev) => !prev);
  };

  const handleAboutModal = () => {
    setAboutModal((prev) => !prev);
  };

  const handleInfoModal = () => {
    setInfoModal((prev) => !prev);
  };

  const handleImageModalOpenClose = () => {
    setImageModal((prev) => !prev);
  };

  const handleOnEditCover = () => {
    setImageModal(true);
    setCircularImage(false);
  };

  const handleCircularImageOpen = () => {
    setImageModal(true);
    setCircularImage(true);
  };

  return (
    <div className="px-5 xl:px-50 py-5 mt-5 flex flex-col gap-5 w-full pt-12 bg-gray-100">
      <div className="flex justify-between">
        {/* left side main section */}
        <div className="w-full md:w-[70%]">
          <div>
            <Card padding={0}>
              <div className="w-full h-fit">
                <div className="relative w-full h-[200px]">
                  <div
                    className="absolute text-[#0B63BD] bg-white rounded-full p-1.5 cursor-pointer top-3 right-3 z-20 flex justify-center items-center"
                    onClick={handleOnEditCover}
                  >
                    <EditOutlinedIcon />
                  </div>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D16AQFhKl6Lk_g9Ng/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1724594721227?e=1756944000&v=beta&t=0iir9kPBBqBzUtbh4AseepqAUYHWGkXm9I_w4i3ZMAs"
                    className="rounded-tr-lg rounded-tl-lg h-[200px] w-full object-cover"
                  />
                  <div
                    onClick={handleCircularImageOpen}
                    className="absolute object-cover top-24 left-6 z-10 md:top-24 md:left-6 sm:top-20 sm:left-3"
                  >
                    <img
                      src="data:image/jpeg;base64,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"
                      className="rounded-full border-4 h-36 w-36 border-white cursor-pointer object-cover sm:h-40 sm:w-40"
                    />
                  </div>
                </div>

                <div className="mt-14 relative px-8 py-2">
                  <div
                    className="absolute cursor-pointer top-0 right-3 z-20 w-[40px] flex justify-center items-center h-[40px] rounded-full p-3 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-950"
                    onClick={handleInfoModal}
                  >
                    <EditOutlinedIcon />
                  </div>
                  <div className="w-full">
                    <div className="text-2xl font-medium">User 1</div>
                    <div className="text-gray-800">
                      I am a Software Engineer
                    </div>
                    <div className="text-sm text-gray-600">Delhi, India</div>
                    <div className="text-md text-[#0B63BD] w-fit cursor-pointer hover:underline font-semibold">
                      2 Connections
                    </div>
                  </div>

                  <div className="md:flex w-full justify-between">
                    <div className="my-5 flex gap-5">
                      <div className="cursor-pointer p-2 px-3 border rounded-4xl h-[95%] w-fit flex justify-center custom-blue text-white font-semibold">
                        Open to
                      </div>
                      <div className="cursor-pointer p-2 px-3 border rounded-4xl h-[95%] w-fit flex justify-center border-[#0B63BD] text-[#0B63BD] hover:border-2 hover:font-bold hover:bg-[#0B63BD]/9 font-semibold">
                        Logout
                      </div>
                      <div className="cursor-pointer p-2 px-3 border rounded-4xl h-[95%] w-fit flex justify-center border-gray-800 text-gray-800 hover:border-2 hover:font-bold hover:bg-gray-800/5 font-semibold">
                        Share
                      </div>
                    </div>
                    <div className="my-5 flex gap-5">
                      <div className="cursor-pointer p-2 px-3 border rounded-4xl h-[95%] w-fit flex justify-center custom-blue text-white font-semibold gap-1.5">
                        <PersonAddAlt1Icon /> Connect
                      </div>
                      <div onClick={handleMessageModal} className="cursor-pointer p-2 px-3 border rounded-4xl h-[95%] w-fit flex justify-center border-[#0B63BD] text-[#0B63BD] hover:border-2 hover:font-bold hover:bg-[#0B63BD]/9 font-semibold gap-1.5">
                        <MapsUgcIcon /> Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* About Section */}
          <div className="my-2">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">About</div>
                <div
                  onClick={handleAboutModal}
                  className="cursor-pointer rounded-full p-2.5 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-950"
                >
                  <EditOutlinedIcon />
                </div>
              </div>

              <div className="text-gray-700 text-md w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                inventore odit natus, quam molestias aliquam officiis
                repellendus, in ipsam, vero ipsa. Tempore quam minus dicta.
                Doloribus mollitia dolor quis enim.
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="my-2">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Skills</div>
              </div>
              <div className="text-gray-700 text-md my-2 w-full flex gap-4 flex-wrap">
                <div className="px-4 py-2 bg-[#0B63BD]/9 text-[#0B63BD] rounded-lg shadow-sm border border-[#0B63BD] hover:bg-[#0B63BD]/18 hover:font-semibold">
                  ReactJS
                </div>
                <div className="px-4 py-2 bg-[#0B63BD]/9 text-[#0B63BD] rounded-lg shadow-sm border border-[#0B63BD] hover:bg-[#0B63BD]/18 hover:font-semibold">
                  NodeJS
                </div>
                <div className="px-4 py-2 bg-[#0B63BD]/9 text-[#0B63BD] rounded-lg shadow-sm border border-[#0B63BD] hover:bg-[#0B63BD]/18 hover:font-semibold">
                  ExpressJS
                </div>
                <div className="px-4 py-2 bg-[#0B63BD]/9 text-[#0B63BD] rounded-lg shadow-sm border border-[#0B63BD] hover:bg-[#0B63BD]/18 hover:font-semibold">
                  MongoDB
                </div>
              </div>
            </Card>
          </div>

          {/* Activities Section */}
          <div className="my-2">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Activities</div>
              </div>
              <div className="cursor-pointer px-3 py-1 w-fit border-1 rounded-4xl bg-[#01754f] text-white font-semibold hover:bg-[#014f35]">
                Posts
              </div>

              {/* Parent div for scrollable activities */}
              <div className="overflow-x-auto my-2 flex gap-3 overflow-y-hidden w-full">
                <div className="cursor-pointer shrink-0 w-[350px]">
                  <Post profile={1} />
                </div>

                <div className="cursor-pointer shrink-0 w-[350px]">
                  <Post profile={1} />
                </div>

                <div className="cursor-pointer shrink-0 w-[350px]">
                  <Post profile={1} />
                </div>
              </div>
            </Card>
          </div>

          {/* Experience Section */}
          <div className="my-2">
            <Card padding={1}>
              <div className="flex justify-between items-center">
                <div className="text-xl">Experience</div>
                <div
                  onClick={handleExpModal}
                  className="flex justify-center items-center rounded-full p-3 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-990 cursor-pointer"
                >
                  <AddIcon />
                </div>
              </div>

              <div className="my-2">
                <div className="p-2 border-t-1 border-gray-300 flex justify-between">
                  <div>
                    <div className="text-lg">
                      DSE Engineer | Full Stack Engineer
                    </div>
                    <div className="text-sm">Amazon</div>
                    <div className="text-sm text-gray-500">
                      March 2022, Present
                    </div>
                    <div className="text-sm text-gray-500">Delhi, India</div>
                  </div>
                  <div className="h-fit cursor-pointer rounded-full p-2.5 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-950">
                    <EditOutlinedIcon />
                  </div>
                </div>
              </div>

              <div className="my-2">
                <div className="p-2 border-t-1 border-gray-300 flex justify-between">
                  <div>
                    <div className="text-lg">
                      DSE Engineer | Full Stack Engineer
                    </div>
                    <div className="text-sm">Amazon</div>
                    <div className="text-sm text-gray-500">
                      March 2022, Present
                    </div>
                    <div className="text-sm text-gray-500">Delhi, India</div>
                  </div>
                  <div className="h-fit cursor-pointer rounded-full p-2.5 bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-950">
                    <EditOutlinedIcon />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:flex md:w-[28%]">
          <div className="sticky top-19">
            <Advertisement />
          </div>
        </div>
      </div>

      {imageSetModal && (
        <Modal
          title="Upload Image"
          closeModal={handleImageModalOpenClose}
          profile={1}
        >
          <ImageModal isCircular={circularImage} />
        </Modal>
      )}

      {infoModal && (
        <Modal title="Edit Info" closeModal={handleInfoModal}>
          <EditInfoModal />
        </Modal>
      )}

      {aboutModal && (
        <Modal title="Edit About" closeModal={handleAboutModal}>
          <AboutModal />
        </Modal>
      )}

      {expModal && (
        <Modal title="Add Experience" closeModal={handleExpModal}>
          <ExpModal />
        </Modal>
      )}

      {messageModal && (
        <Modal title="Send Message" closeModal={handleMessageModal}>
          <MessageModal />
        </Modal>
      )}
    </div>
  );
};

export default Profile;
