import LogoImage from "assets/logo.png";
import ProfileImage from "assets/profile.jpg";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import ControlOutlined from "@ant-design/icons/ControlOutlined";
import GlobalOutlined from "@ant-design/icons/GlobalOutlined";
import BellOutlined from "@ant-design/icons/BellOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";

const Navbar = (props) => {
  return (
    <>
      <div className="h-20 w-full bg-white grid grid-cols-6 items-center px-6 py-2">
        <div className="flex items-center col-span-6 md:col-span-1">
          <img className="w-32" src={LogoImage} alt="logo" />
          <button
            onClick={props.sidebarHandler}
            className="ml-auto text-regMain hover:text-regMinor bg-regMain bg-opacity-10 w-8 h-8 flex items-center justify-center rounded-xl hover:bg-opacity-100"
            type="button"
          >
            <MenuOutlined />
          </button>
        </div>
        <div className="hidden md:flex col-span-4">
          <div className="flex items-center w-5/12 relative">
            <div className="absolute text-gray ml-9 mb-2">
              <SearchOutlined />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="border-2 border-gray border-opacity-30 px-10 py-3 rounded-xl w-full ml-5 focus:outline-none hover:border-black focus:border-regMain placeholder-gray placeholder-opacity-70"
            />
            <div className="absolute text-gray ml-9 right-0 mr-4">
              <button
                className="ml-16 text-regMain hover:text-regMinor bg-regMain bg-opacity-10 w-8 h-8 flex items-center justify-center rounded-xl hover:bg-opacity-100"
                type="button"
              >
                <ControlOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex col-span-1">
          <div className="flex ml-auto space-x-3">
            <button
              className="text-regMain hover:text-regMinor bg-regMain bg-opacity-10 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-opacity-100"
              type="button"
            >
              <GlobalOutlined />
            </button>
            <button
              className="text-regMain hover:text-regMinor bg-regMain bg-opacity-10 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-opacity-100"
              type="button"
            >
              <BellOutlined />
            </button>
            <button
              className="text-xl text-regMain hover:text-regMinor bg-regMain bg-opacity-10 w-20 h-10 flex items-center justify-center rounded-xl hover:bg-opacity-100"
              type="button"
            >
              <img
                className="rounded-full w-8 h-8 mr-3"
                src={ProfileImage}
                alt="profile"
              />{" "}
              <SettingOutlined />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
