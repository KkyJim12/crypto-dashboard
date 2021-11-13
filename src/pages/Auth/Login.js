import Logo from "assets/logo.png";
import LoginForm from "components/Auth/Login/Form";
import RightHero from "components/Auth/Login/RightHero";

const Login = () => {
  return (
    <>
      <div className="grid grid-cols-7 min-h-screen">
        <div className="col-span-4">
          <img className="ml-10" src={Logo} alt="logo" />
          <LoginForm />
        </div>
        <div className="col-span-3">
          <RightHero />
        </div>
      </div>
    </>
  );
};

export default Login;
