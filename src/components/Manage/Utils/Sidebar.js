import DashboardOutlined from "@ant-design/icons/DashboardOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";

const Sidebar = () => {
  return (
    <div className="absolute mt-20">
      <div className="h-screen bg-white w-64 px-6">
        <div className="py-3">
          <span className="font-semibold text-sm">Application</span>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="flex cursor-pointer items-center space-x-2 px-5 py-3 text-sm text-black text-opacity-60 font-semibold hover:bg-regMain hover:bg-opacity-10 hover:text-regMain rounded-xl">
            <DashboardOutlined />
            <span>Dashboard</span>
          </div>
          <div className="flex cursor-pointer items-center space-x-2 px-5 py-3 text-sm text-black font-semibold bg-regMain bg-opacity-10 text-regMain rounded-xl">
            <UserOutlined />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
