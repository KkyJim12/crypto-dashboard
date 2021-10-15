import { useEffect, useState } from 'react';
import MarketList from 'components/MarketList';
import Navbar from 'components/Navbar';
import Tradingview from 'components/Tradingview';
import Exchange from 'components/Exchange';
import Orderbook from 'components/Orderbook';
import MarketTrade from 'components/MarketTrade';

const MainLayout = () => {
  const [marketList, setMarketList] = useState([]);
  const [sideMenu, setSideMenu] = useState(true);

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws');

    const msg = {
      method: 'SUBSCRIBE',
      params: ['!ticker@arr'],
      id: 1,
    };

    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      let x = JSON.parse(event.data);

      console.log(event);

      if (x.length > 0) {
        setMarketList(x);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const changeSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <div className='bg-secondary'>
      <Navbar />
      <div className='h-screen'>
        <div className='grid grid-cols-12' style={{ height: '80vh' }}>
          <div
            className={`${sideMenu ? 'col-span-2 ' : 'col-span-1'} p-1 bg-main`}
          >
            <MarketList
              data={marketList}
              sideMenu={sideMenu}
              changeSideMenu={changeSideMenu}
            />
          </div>
          <div
            className={`${
              sideMenu ? 'col-span-6' : 'col-span-7'
            } p-1 flex flex-col lg:space-y-1`}
          >
            <div className='flex-1'></div>
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
    </div>
  );
};

export default MainLayout;
