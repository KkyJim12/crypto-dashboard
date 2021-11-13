import Logo from "assets/logo.png";
import RegisterForm from "components/Auth/Register/Form";
import RightHero from "components/Auth/Register/RightHero";

const Register = () => {
  return (
    <>
      <div className="grid grid-cols-7 min-h-screen">
        <div className="col-span-4">
          <img className="ml-10" src={Logo} alt="logo" />
          <RegisterForm />
        </div>
        <div className="col-span-3">
          <RightHero />
        </div>
      </div>
    </>
  );
};

export default Register;
