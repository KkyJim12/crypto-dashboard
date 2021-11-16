import Logo from "assets/logo.png";
import RegisterForm from "components/Auth/Register/Form";
import RightHero from "components/Auth/Register/RightHero";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-7 min-h-screen">
        <div className="md:col-span-4 col-span-7">
          <img className="md:ml-10 m-auto" src={Logo} alt="logo" />
          <RegisterForm />
        </div>
        <div className="col-span-3 col-span-3 hidden md:block">
          <RightHero />
        </div>
      </div>
    </>
  );
};

export default Register;
