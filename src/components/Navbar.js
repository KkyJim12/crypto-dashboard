import Logo from "assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center h-16 px-6 bg-main align">
      <div className="px-3">
        <img className="w-24" src={Logo} alt="logo"></img>
      </div>
      <ul className="flex items-center lg:space-x-5">
        <li>
          <a className="text-info hover:text-success" href="/">
            Markets
          </a>
        </li>
        <li>
          <a className="text-info hover:text-success" href="/">
            Exchange
          </a>
        </li>
        <li>
          <a className="text-info hover:text-success" href="/">
            Buy Crypto
          </a>
        </li>
        <li>
          <a className="text-info hover:text-success" href="/">
            Contract
          </a>
        </li>
        <li>
          <a className="text-info hover:text-success" href="/">
            ETF
          </a>
        </li>
        <li>
          <a className="text-info hover:text-success" href="/">
            NewCoin
          </a>
        </li>
        <li>
          <a className="text-info hover:text-success" href="/">
            Kinghash
          </a>
        </li>
        <li>
          <a className="text-info hover:text-success" href="/">
            Announcement
          </a>
        </li>
      </ul>
      <div className="flex h-full ml-auto">
        <div className="flex px-6 py-4 border-l border-r lg:space-x-4 border-info">
          <button
            type="button"
            className="px-5 py-1 text-info hover:bg-info hover:bg-opacity-25"
          >
            Log In
          </button>
          <button
            type="button"
            className="px-5 py-1 border hover:text-orange text-info border-orange"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
