import LoginImage from "assets/login.svg";

const RightHero = () => {
  return (
    <div
      className="flex flex-col items-center py-20 space-y-20 h-full"
      style={{ background: "#e6f3fd" }}
    >
      <h1 style={{ color: "#212121" }} className="text-4xl font-bold">
        Multiple dashboard and widgets
      </h1>
      <img className="w-3/6 h-auto" src={LoginImage} alt="login" />
    </div>
  );
};

export default RightHero;
