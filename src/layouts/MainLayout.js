import MarketList from "components/MarketList";
import Navbar from "components/Navbar";
import Tradingview from "components/Tradingview";

const MainLayout = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="container h-screen">
        <div className="grid grid-cols-5 h-5/6">
          <div className="col-span-1 p-1">
            <MarketList />
          </div>
          <div className="col-span-3 p-1 flex flex-col">
            <div className="flex-1">
              <Tradingview />
            </div>
            <div className="flex-1">test</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
