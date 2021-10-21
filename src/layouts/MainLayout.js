import { useState } from "react";
import MarketList from "components/MarketList";
import Navbar from "components/Navbar";
import CoinInfo from "components/CoinInfo";
import Tradingview from "components/Tradingview";
import Exchange from "components/Exchange";
import Orderbook from "components/Orderbook";
import MarketTrade from "components/MarketTrade";
import Footer from "components/Footer";

const MainLayout = () => {
  const [sideMenu, setSideMenu] = useState(true);

  const changeSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <div className="bg-secondary">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div style={{ height: "90vh" }}>
        <div
          className="grid grid-cols-12 gap-y-4 lg:gap-y-0"
          style={{ height: "100%" }}
        >
          <div
            className={`${
              sideMenu ? "lg:col-span-2 " : "lg:col-span-1"
            } col-span-12 p-1 bg-main`}
          >
            <MarketList sideMenu={sideMenu} changeSideMenu={changeSideMenu} />
          </div>
          <div
            className={`${
              sideMenu ? "lg:col-span-6" : "lg:col-span-7"
            } col-span-12 p-1 flex flex-col space-y-4 lg:space-y-1`}
          >
            <div className="flex-shirnk">
              <CoinInfo />
            </div>
            <div className="flex-1">
              <Tradingview />
            </div>
            <div className="flex-1">
              <Exchange />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 p-1">
            <Orderbook />
          </div>
          <div className="col-span-12 lg:col-span-2 p-1">
            <MarketTrade />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
