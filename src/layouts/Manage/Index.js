import { useState } from "react";
import ProfileImage from "assets/profile.jpg";
import Navbar from "components/Manage/Utils/Navbar";
import Sidebar from "components/Manage/Utils/Sidebar";
import HomeFilled from "@ant-design/icons/HomeFilled";
import RightOutlined from "@ant-design/icons/RightOutlined";
import { isMobile } from "react-device-detect";

const ManageLayout = () => {
  const [sidebar, setSidebar] = useState(isMobile ? false : true);

  const changeSidebar = () => {
    setSidebar(!sidebar);
  };

  const halfWidth = "bg-white absolute mt-20 ml-64 h-full pr-6 w-almostFull";
  const fullWidth = "bg-white absolute mt-20 h-full w-full px-6";

  return (
    <main className="flex w-full bg-regMain bg-opacity-10 relative">
      <Navbar sidebarHandler={changeSidebar} />
      {sidebar && <Sidebar />}
      <div className={sidebar ? halfWidth : fullWidth}>
        <div className="rounded-t-2xl bg-regMain bg-opacity-10 min-h-screen p-5">
          <div className="rounded-2xl bg-white w-full">
            <div className="p-5 flex items-center">
              <div className="text-xl font-semibold">Profile</div>
              <div className="ml-auto flex items-center space-x-2 nd:space-x-4">
                <div className="text-regMain mb-2 text-sm">
                  <HomeFilled />
                </div>
                <div className="text-gray mb-2 text-sm">
                  <RightOutlined />
                </div>
                <div className="font-semibold text-sm">Profile</div>
                <div className="text-gray mb-2 text-sm">
                  <RightOutlined />
                </div>
                <div className="font-semibold text-gray text-sm">Profile</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 w-full h-full bg-white rounded-xl mt-3">
            <div className="p-5 text-xl font-semibold border-b border-gray border-opacity-20">
              Update Profile
            </div>
            <div className="flex items-center p-5">
              <img
                className="rounded-full h-16 w-16 cursor-pointer"
                src={ProfileImage}
                alt="profile"
              />
              <div className="flex flex-col space-y-2">
                <span className="ml-3 font-semibold">
                  Piyakarn Nimmakulvirut
                </span>
                <span className="ml-3 text-xs font-semibold">
                  Status:
                  <span className="bg-green-400 rounded text-white px-2 ml-1">
                    Approved
                  </span>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-5 pb-10 border-b border-gray border-opacity-20">
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Gender"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Username"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Mobile"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Address"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="ID Type"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Birthdate"
                  type="date"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="ID Number"
                  type="text"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input
                  class="px-2 py-3 border border-gray border-opacity-70 rounded-2xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Enter Google Authenticator"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-end px-5 pb-3">
              <button
                className="bg-blue-500 bg-opacity-80 rounded text-white px-6 py-2 hover:bg-opacity-100 shadow-md hover:shadow-lg w-full md:w-auto"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageLayout;
