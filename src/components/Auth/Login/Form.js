import { Link, useHistory } from "react-router-dom";
import Google from "assets/google.svg";

const LoginForm = () => {
  const history = useHistory();
  return (
    <div className="flex flex-col items-center py-2 space-y-6 md:w-2/5 w-full mx-auto px-6 md:px-0">
      <h3 className="text-regMain text-2xl font-bold"> Hi, Welcome Back</h3>
      <h5 style={{ color: "#9ea4b4" }} className="text-lg">
        Enter your credentials to continue
      </h5>
      <button className="flex text-minor items-center space-x-3 text-base font-medium w-full justify-center py-2 border border-transparent rounded-md hover:border-opacity-70 bg-regMinor hover:border-regMain hover:bg-opacity-5 hover:bg-regMain">
        <img className="w-4" src={Google} alt="google" />{" "}
        <span>Sign in With Google</span>
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
      <div className="font-semibold text-sm">Sign in with Email address</div>

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
      <div className="flex w-full">
        <div className="flex space-x-2 items-center">
          <input className="border-gray-200 border-2 h-4 w-4" type="checkbox" />{" "}
          <span className="text-sm font-semibold">Remember me</span>
        </div>
        <div className="flex ml-auto">
          <span className="text-sm font-semibold text-regMain">
            Forget Password?
          </span>
        </div>
      </div>
      <div className="flex w-full">
        <button
          onClick={() => history.push("/manage/profile")}
          type="button"
          className="bg-regMain w-full rounded py-2 text-white transform active:scale-90 duration-150"
        >
          Sign In
        </button>
      </div>
      <div className="flex border-t border-minor border-opacity-10 w-full justify-center pt-4">
        <Link to="/register">
          {" "}
          <span className="text-sm font-semibold">Don't have an account?</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
