import Logo from "assets/logo.png";
import AppstoreFilled from "@ant-design/icons/AppstoreFilled";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import DownloadOutlined from "@ant-design/icons/DownloadOutlined";
import SettingFilled from "@ant-design/icons/SettingFilled";
import CaretDownFilled from "@ant-design/icons/CaretDownFilled";
import { useState } from "react";

const Navbar = () => {
  const [faqLink, setFaqLink] = useState(false);
  const [buyCryptoLink, setBuyCryptoLink] = useState(false);
  const [languageLink, setLanguageLink] = useState(false);

  const openFaqLink = () => {
    setFaqLink(true);
  };

  const closeFaqLink = () => {
    setFaqLink(false);
  };

  const openBuyCrypto = () => {
    setBuyCryptoLink(true);
  };

  const closeBuyCrypto = () => {
    setBuyCryptoLink(false);
  };

  const openLanguageLink = () => {
    setLanguageLink(true);
  };

  const closeLanguageLink = () => {
    setLanguageLink(false);
  };

  return (
    <div className="flex items-center h-16 pl-6 bg-main align z-10">
      <div className="px-3">
        <img className="w-24" src={Logo} alt="logo"></img>
      </div>
      <ul className="flex items-start lg:space-x-5 pl-4">
        <li
          className="self-end"
          onMouseEnter={openFaqLink}
          onMouseLeave={closeFaqLink}
        >
          <a className="text-info text-lg flex hover:text-orange" href="/">
            {faqLink ? <MenuOutlined /> : <AppstoreFilled />}
          </a>
          {faqLink && (
            <a href="/">
              <div className="bg-main absolute w-40 py-4 px-5 text-info">
                FAQ
              </div>
            </a>
          )}
        </li>
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
        <li onMouseEnter={openBuyCrypto} onMouseLeave={closeBuyCrypto}>
          <a className="text-info hover:text-success" href="/">
            Buy Crypto
          </a>
          {buyCryptoLink && (
            <div>
              <a href="/">
                <div className="bg-main absolute w-40 py-4 px-5 text-info z-10">
                  P2P Trading
                </div>
              </a>
              <a href="/">
                <div className="bg-main absolute w-40 py-4 px-5 mt-12 text-info z-10">
                  Credit Card
                </div>
              </a>
            </div>
          )}
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
        <div className="flex px-6 py-4 border-l border-r lg:space-x-4 border-info border-opacity-20">
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
        <div className="flex">
          <button type="button" className="px-5 py-5 text-info">
            <DownloadOutlined />
          </button>
          <button
            type="button"
            className="px-5 py-5 text-info border-l border-r border-info border-opacity-20"
          >
            <SettingFilled />
          </button>
          <div onMouseEnter={openLanguageLink} onMouseLeave={closeLanguageLink}>
            <a className="px-5 pt-6 pb-5 text-info text-sm flex" href="/">
              <span className="mr-1">Language</span>
              <span className="self-center">
                <CaretDownFilled />
              </span>
            </a>
            {languageLink && (
              <div>
                <a href="/">
                  <div className="bg-main absolute w-40 py-4 px-5 text-info z-10 right-0">
                    English
                  </div>
                </a>
                <a href="/">
                  <div className="bg-main absolute w-40 py-4 px-5 mt-12 text-info z-10 right-0">
                    ไทย
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
