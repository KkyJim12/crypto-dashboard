import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import StarOulined from '@ant-design/icons/StarOutlined';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const MarketList = (props) => {
  const history = useHistory();
  const sideMenu = props.sideMenu;
  const changeSideMenu = props.changeSideMenu;

  const ws = useRef(null);

  const [favoriteList, setFavoriteList] = useState([]);
  const [search, setSearch] = useState('');
  const [displayedMarketList, setDisplayedMarketList] = useState([]);
  const [allMarketMap, setAllMarketMap] = useState({});
  const [market, setMarket] = useState('USDT');

  const handleRowClick = (filterByCoin) => {
    history.push(`/market/${filterByCoin}`);
  };

  const filterData = (market) => {
    setMarket(market);
  };

  const filterBySearch = (value) => {
    setSearch(value);
  };

  const getMarketList = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + '/market/list'
      );

      const marketListResponse = response.data.data;

      for (let i = 0; i < marketListResponse.length; i++) {
        marketListResponse[i].s = marketListResponse[i].symbol;
        marketListResponse[i].P = marketListResponse[i].priceChange;
        marketListResponse[i].c = marketListResponse[i].lastPrice;
      }

      const marketMap = marketListResponse.reduce((m, cur) => {
        return { ...m, [cur.s]: { ...cur } };
      });

      setAllMarketMap(marketMap);
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateFavorite = (symbol) => {
    setFavoriteList([...favoriteList, symbol]);
    localStorage.setItem('favorite', JSON.stringify(favoriteList));
  };

  useEffect(() => {
    let sortedPairName = Object.keys(allMarketMap).filter(
      (pairName) =>
        pairName.toLowerCase().includes(search.toLowerCase()) &&
        pairName.includes(market)
    );
    sortedPairName.sort((a, b) => (a > b ? 1 : -1));
    const sortedMarketData = sortedPairName.reduce((arr, curPairName) => {
      if (curPairName in allMarketMap) {
        return [...arr, allMarketMap[curPairName]];
      }
      return arr;
    }, []);

    setDisplayedMarketList(sortedMarketData);
  }, [allMarketMap, market, search]);

  useEffect(() => {
    getMarketList();

    ws.current = new WebSocket('wss://stream.binance.com:9443/ws');

    const msg = {
      method: 'SUBSCRIBE',
      params: ['!ticker@arr'],
      id: 1,
    };

    ws.current.onopen = () => {
      ws.current.send(JSON.stringify(msg));
    };

    const wsCurrent = ws.current;
    return () => {
      wsCurrent.close();
    };
  }, []);

  useEffect(() => {
    if (!ws.current) return;

    ws.current.onmessage = (event) => {
      let tickers = JSON.parse(event.data);

      if (tickers.length > 0) {
        let allMarketMapToUpdate = { ...allMarketMap };
        tickers.forEach((ticker) => {
          // if (!(ticker.s in allMarketMapToUpdate)) {
          //   // console.log(ticker.s)
          // }
          allMarketMapToUpdate[ticker.s] = { ...ticker };
        });
        setAllMarketMap(allMarketMapToUpdate);
      }
    };
  }, [allMarketMap]);

  const largeSideMenu = (
    <div className='bg-main'>
      <div className='px-4 pt-2 border-b border-opacity-25 border-info bg-third'>
        <div className='flex'>
          <div>
            <div className='absolute ml-2 text-info'>
              <SearchOutlined />
            </div>
            <input
              onChange={(e) => filterBySearch(e.target.value)}
              className='p-1 text-sm text-white border outline-none bg-third border-minor placeholder-minor hover:border-orange focus:border-orange pl-7'
              type='text'
              placeholder='Search'
            ></input>
          </div>
          <div className='ml-auto'>
            <button onClick={changeSideMenu} className='text-info'>
              <MenuUnfoldOutlined />
            </button>
          </div>
        </div>

        <div className='flex pt-2'>
          <ul className='flex text-sm lg:space-x-5 text-info'>
            <li className='pb-2 border-b-2 cursor-pointer border-main hover:border-orange'>
              Favorite
            </li>
            <li
              onClick={() => filterData('USDT')}
              className={`pb-2 border-b-2 border-main hover:border-orange cursor-pointer ${
                market === 'USDT' && 'border-orange'
              }`}
            >
              USDT
            </li>
            <li
              onClick={() => filterData('BTC')}
              className={`pb-2 border-b-2 border-main hover:border-orange cursor-pointer ${
                market === 'BTC' && 'border-orange'
              }`}
            >
              BTC
            </li>
            <li
              onClick={() => filterData('ETH')}
              className={`pb-2 border-b-2 border-main hover:border-orange cursor-pointer ${
                market === 'ETH' && 'border-orange'
              }`}
            >
              ETH
            </li>
          </ul>
          <span className='flex items-center pb-2 ml-auto text-minor'>
            {/* <RightOutlined /> */}
          </span>
        </div>
      </div>
      <div className='overflow-y-scroll' style={{ height: '80vh' }}>
        <table className='w-full table-fixed'>
          <thead className='text-xs border-b border-opacity-25 text-info border-info'>
            <tr>
              <th className='w-2/12'></th>
              <th className='w-3/12 py-1 font-medium text-left'>Markets</th>
              <th className='w-4/12 py-1 font-medium text-right'>Price</th>
              <th className='w-3/12 py-1 font-medium text-right'>Change</th>
              <th className='w-1/12 py-1 font-medium'></th>
            </tr>
          </thead>
          <tbody>
            {displayedMarketList.map((item, index) => {
              return (
                <tr
                  onClick={() => handleRowClick(item.s)}
                  className='cursor-pointer hover:bg-info hover:bg-opacity-25'
                  key={index}
                >
                  <td>
                    <div
                      onClick={() => updateFavorite(item.s)}
                      className='flex items-center justify-end mr-1 text-sm text-info'
                    >
                      <StarOulined />
                    </div>
                  </td>
                  <td className='py-1 text-sm text-left text-white'>
                    {item.s}
                  </td>
                  <td
                    className={`text-right text-xs py-1 ${
                      item.P > 0 ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {parseFloat(item.c).toFixed(4)}
                  </td>
                  <td
                    className={`text-right text-xs py-1 ${
                      item.P > 0 ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {item.P > 0 && '+'}
                    {parseFloat(item.P).toFixed(2)}
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const smallSideMenu = (
    <div className='flex flex-col'>
      <div className='flex justify-end px-2 py-1 bg-third'>
        <button className='text-info' onClick={changeSideMenu}>
          <MenuUnfoldOutlined />
        </button>
      </div>
      <div className='py-1 text-base text-center text-white bg-third'>
        {market}
      </div>
      <div className='py-1 text-sm text-center border-t border-b border-opacity-25 bg-main text-info border-info'>
        Market
      </div>
      <div
        className='flex flex-col overflow-y-scroll'
        style={{ height: '80vh' }}
      >
        {displayedMarketList.map((item, index) => {
          return (
            <Link key={item.s} to={`/market/${item.s}`}>
              <div className='py-1 text-xs text-center text-white hover:bg-third'>
                {item.s}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return <>{sideMenu ? largeSideMenu : smallSideMenu}</>;
};

export default MarketList;
