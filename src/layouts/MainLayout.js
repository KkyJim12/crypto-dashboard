import { useEffect, useState } from "react";
import MarketList from "components/MarketList";
import Navbar from "components/Navbar";
import Tradingview from "components/Tradingview";
import Exchange from "components/Exchange";
import Orderbook from "components/Orderbook";
import MarketTrade from "components/MarketTrade";
import axios from "axios";

const MainLayout = () => {
  const [marketList, setMarketList] = useState([]);
  const [sideMenu, setSideMenu] = useState(true);

  useEffect(() => {
    getMarketList();
  }, []);

  const changeSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  const getMarketList = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/v1/cryptocurrency/listings/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.REACT_APP_API_KEY,
          },
        }
      );
      console.log(response.data.data);
      setMarketList(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="h-screen">
        <div className="grid grid-cols-12" style={{ height: "80vh" }}>
          <div
            className={`${sideMenu ? "col-span-2 " : "col-span-1"} p-1 bg-main`}
          >
            <MarketList
              data={marketList}
              sideMenu={sideMenu}
              changeSideMenu={changeSideMenu}
            />
          </div>
          <div
            className={`${
              sideMenu ? "col-span-6" : "col-span-7"
            } p-1 flex flex-col lg:space-y-1`}
          >
            <div className="flex-1">
              <Tradingview />
            </div>
            <div className="flex-1">
              <Exchange />
            </div>
          </div>
          <div className="col-span-2 p-1">
            <Orderbook />
          </div>
          <div className="col-span-2 p-1">
            <MarketTrade />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
