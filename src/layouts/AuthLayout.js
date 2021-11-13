import Logo from "assets/logo.png";
import LoginImage from "assets/login.svg";
import Google from "assets/google.svg";

const AuthLayout = () => {
  return (
    <>
      <div className="grid grid-cols-7 min-h-screen">
        <div className="col-span-4">
          <img className="ml-10" src={Logo} alt="logo" />
          <div className="flex flex-col items-center py-2 space-y-6 w-2/5 mx-auto">
            <h3 className="text-regMain text-2xl font-bold">Sign up</h3>
            <h5 style={{ color: "#9ea4b4" }} className="text-lg">
              Enter your credentials to continue
            </h5>
            <button className="flex text-minor items-center space-x-3 text-base font-medium w-full justify-center py-2 border border-transparent rounded-md hover:border-opacity-70 bg-regMinor hover:border-regMain hover:bg-opacity-5 hover:bg-regMain">
              <img className="w-4" src={Google} alt="google" />{" "}
              <span>Sign Up With Google</span>
            </button>
            <div className="grid grid-cols-9 w-full items-center space-x-6">
              <div className="col-span-3 text-minor text-opacity-10">
                <hr></hr>
              </div>
              <div className="col-span-3 border border-minor border-opacity-10 text-center py-1 rounded-lg text-sm font-semibold">
                OR
              </div>
              <div className="col-span-3 text-minor text-opacity-10">
                <hr></hr>
              </div>
            </div>
            <div className="font-semibold text-sm">
              Sign up with Email address
            </div>
            <div class="flex space-x-4 w-full">
              <div class="flex flex-1">
                <input
                  class="px-2 py-4 border border-gray border-opacity-70 rounded-xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="First Name"
                  type="text"
                />
              </div>
              <div class="flex flex-1">
                <input
                  class="px-2 py-4 border border-gray border-opacity-70 rounded-xl bg-gray bg-opacity-5 focus:outline-none w-full"
                  placeholder="Last Name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex w-full">
              <input
                class="px-2 py-4 border border-gray border-opacity-70 rounded-xl bg-gray bg-opacity-5 focus:outline-none w-full"
                placeholder="Email Address"
                type="text"
              />
            </div>
            <div className="flex w-full">
              <input
                class="px-2 py-4 border border-gray border-opacity-70 rounded-xl bg-gray bg-opacity-5 focus:outline-none w-full"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="flex w-full items-center space-x-2">
              <input
                className="border-gray-200 border-2 h-4 w-4"
                type="checkbox"
              />{" "}
              <span className="text-sm font-semibold">
                Agree with terms and conditions
              </span>
            </div>
            <div className="flex w-full">
              <button
                type="button"
                className="bg-regMain w-full rounded py-2 text-white transform active:scale-90 duration-150"
              >
                Sign Up
              </button>
            </div>
            <div className="flex border-t border-minor border-opacity-10 w-full justify-center pt-4">
              <span className="text-sm font-semibold">
                Already have an account?
              </span>
            </div>
          </div>
        </div>
        <div
          className="col-span-3 flex flex-col items-center py-20 space-y-40"
          style={{ background: "#e6f3fd" }}
        >
          <h1 style={{ color: "#212121" }} className="text-4xl font-bold">
            Power of React with Material UI
          </h1>
          <img className="w-2/6 h-auto" src={LoginImage} alt="login" />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
