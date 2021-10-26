import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const MarketTrade = () => {
  let { coin } = useParams();

  const [tradeTransaction, setTradeTransaction] = useState([]);

  useEffect(() => {
    const getInitTradeTransaction = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + '/' + coin
        );

        for (let i = 0; i < response.data.data.length; i++) {
          response.data.data[i].p = response.data.data[i].price;
          response.data.data[i].q = response.data.data[i].qty;
          response.data.data[i].T = response.data.data[i].time;
          response.data.data[i].m = response.data.data[i].isBuyerMaker;
        }

        response.data.data.sort((a, b) => b.T - a.T);

        setTradeTransaction(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    getInitTradeTransaction();

    const ws = new WebSocket('wss://stream.binance.com:9443/ws');

    const msg = {
      method: 'SUBSCRIBE',
      params: [`${coin.toLowerCase()}@trade`],
      id: 1,
    };

    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      let x = JSON.parse(event.data);

      if (x.e === 'trade') {
        setTradeTransaction((tradeTransaction) => [
          x,
          ...tradeTransaction.slice(0, -1),
        ]);
      }
    };

    return () => {
      ws.close();
    };
  }, [coin]);

  return (
    <div className='w-full h-full bg-main'>
      <div className='bg-third'>
        <h1 className='px-3 py-2 text-white'>Market Trades</h1>
      </div>
      <table className='w-full table-fixed'>
        <thead className='text-xs border-t border-b border-opacity-25 text-info border-info bg-third'>
          <tr>
            <th className='w-4/12 py-1 pl-2 font-medium text-left'>Price</th>
            <th className='w-4/12 py-1 font-medium text-right'>Volume</th>
            <th className='w-4/12 py-1 pr-2 font-medium text-right'>Date</th>
          </tr>
        </thead>
        <tbody>
          {tradeTransaction.map((item, index) => {
            return (
              <tr key={index}>
                <td
                  className={`pl-2 text-xs text-left ${
                    item.m ? 'text-danger' : 'text-success'
                  }`}
                >
                  {parseFloat(item.p).toFixed(4)}
                </td>
                <td className='text-xs text-right text-info'>
                  {parseFloat(item.q).toFixed(3)}
                </td>
                <td className='pr-2 text-xs text-right text-info'>
                  {moment(item.T).format('hh:mm:ss')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MarketTrade;
