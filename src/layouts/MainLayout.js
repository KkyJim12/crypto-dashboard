import MarketList from "components/MarketList";
import Navbar from "components/Navbar";
import Tradingview from "components/Tradingview";
import Exchange from "components/Exchange";
import Orderbook from "components/Orderbook";
import MarketTrade from "components/MarketTrade";

const MainLayout = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="h-screen">
        <div className="grid grid-cols-6 h-5/6">
          <div className="col-span-1 p-1">
            <MarketList />
          </div>
          <div className="col-span-3 p-1 flex flex-col lg:space-y-1">
            <div className="flex-1">
              <Tradingview />
            </div>
            <div className="flex-1">
              <Exchange />
            </div>
          </div>
          <div className="col-span-1 p-1">
            <Orderbook />
          </div>
          <div className="col-span-1 p-1">
            <MarketTrade />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
