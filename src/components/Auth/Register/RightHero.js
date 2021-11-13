import RegisterImage from "assets/register.svg";

const RightHero = () => {
  return (
    <div
      className="flex flex-col items-center py-20 space-y-40 h-full"
      style={{ background: "#e6f3fd" }}
    >
      <h1 style={{ color: "#212121" }} className="text-4xl font-bold">
        Power of React with Material UI
      </h1>
      <img className="w-2/6 h-auto" src={RegisterImage} alt="login" />
    </div>
  );
};

export default RightHero;
