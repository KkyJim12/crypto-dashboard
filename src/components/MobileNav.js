import { useState } from "react";
import Logo from "assets/logo.png";
import AppstoreFilled from "@ant-design/icons/AppstoreFilled";

const MobileNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [language, setLanguage] = useState(false);

  const changeMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const changeDropdownMenu = () => {
    setDropdown(!dropdown);
  };

  const changeLanguageMenu = () => {
    setLanguage(!language);
  };

  const dropdownMenu = (
    <>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        Markets
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        Exchange
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        Buy Crypto
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        Contract
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        ETF
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        NewCoin
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        KingHash
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        Announcement
      </li>
    </>
  );

  const languageMenu = (
    <>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        Eng
      </li>
      <li className="py-2 px-10 text-info border-b border-info border-opacity-25">
        ไทย
      </li>
    </>
  );

  const menu = (
    <div className="bg-main relative z-20">
      <ul className="absolute right-0 bg-main w-screen">
        <li className="py-2 px-5 text-info border-b border-info border-opacity-25">
          Login
        </li>
        <li className="py-2 px-5 text-info border-b border-info border-opacity-25">
          Register
        </li>
        <li
          onClick={() => changeDropdownMenu()}
          className="py-2 px-5 text-info border-b border-info border-opacity-25"
        >
          Menu
        </li>
        {dropdown && dropdownMenu}
        <li className="py-2 px-5 text-info border-b border-info border-opacity-25">
          <div className="flex">
            <div onClick={() => changeLanguageMenu()} className="flex flex-1">
              Language
            </div>
          </div>
        </li>
        {language && languageMenu}
      </ul>
    </div>
  );

  return (
    <>
      <div className="flex items-center h-16 px-5 bg-main align z-10 relative">
        <div>
          <img className="w-24" src={Logo} alt="logo"></img>
        </div>
        <div className="ml-auto text-info text-lg">
          <div onClick={() => changeMobileMenu()}>
            <AppstoreFilled />
          </div>
        </div>
      </div>
      {mobileMenu && menu}
    </>
  );
};

export default MobileNav;
