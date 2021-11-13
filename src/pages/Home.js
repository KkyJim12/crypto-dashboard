import { useState } from "react";
import { isMobile } from "react-device-detect";
import Navbar from "components/Navbar";
import MobileNav from "components/MobileNav";
import MarketList from "components/MarketList";
import CoinInfo from "components/CoinInfo";
import Tradingview from "components/Tradingview";
import VolumeChart from "components/VolumeChart";
import Exchange from "components/Exchange";
import Orderbook from "components/Orderbook";
import MarketTrade from "components/MarketTrade";
import Footer from "components/Footer";

const Home = () => {
  const [sideMenu, setSideMenu] = useState(true);
  const [chart, setChart] = useState("Tradingview");

  let orderBookVolume = [];

  const changeSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  const changeChart = (type) => {
    setChart(type);
  };

  return (
    <div className="bg-secondary">
      <div>
        <div
          className="grid grid-cols-12 gap-y-4 lg:gap-y-0"
          style={{ height: "100%" }}
        >
          <div className="col-span-12">
            {isMobile ? <MobileNav /> : <Navbar />}
          </div>
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
              <CoinInfo chart={chart} handleChart={changeChart} />
            </div>
            <div className="flex-1">
              {chart === "Tradingview" ? <Tradingview /> : <VolumeChart />}
            </div>
            <div className="flex-1">
              <Exchange />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-2 p-1">
            <Orderbook data={orderBookVolume} />
          </div>
          <div className="col-span-12 lg:col-span-2 p-1">
            <MarketTrade />
          </div>
        </div>
        <div className="col-span-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
