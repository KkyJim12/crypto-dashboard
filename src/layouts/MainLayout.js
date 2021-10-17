import { useState } from 'react';
import MarketList from 'components/MarketList';
import Navbar from 'components/Navbar';
import Tradingview from 'components/Tradingview';
import Exchange from 'components/Exchange';
import Orderbook from 'components/Orderbook';
import MarketTrade from 'components/MarketTrade';
import Footer from 'components/Footer';

const MainLayout = () => {
  const [sideMenu, setSideMenu] = useState(true);

  const changeSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <div className='bg-secondary'>
      <Navbar />
      <div style={{ height: '90vh' }}>
        <div className='grid grid-cols-12' style={{ height: '100%' }}>
          <div
            className={`${sideMenu ? 'col-span-2 ' : 'col-span-1'} p-1 bg-main`}
          >
            <MarketList sideMenu={sideMenu} changeSideMenu={changeSideMenu} />
          </div>
          <div
            className={`${
              sideMenu ? 'col-span-6' : 'col-span-7'
            } p-1 flex flex-col lg:space-y-1`}
          >
            <div className='flex-1'>
              <Tradingview />
            </div>
            <div className='flex-1'>
              <Exchange />
            </div>
          </div>
          <div className='col-span-2 p-1'>
            <Orderbook />
          </div>
          <div className='col-span-2 p-1'>
            <MarketTrade />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
