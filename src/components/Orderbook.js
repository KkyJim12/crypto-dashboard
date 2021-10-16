import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Orderbook = () => {
  const [bids, setBids] = useState([]);
  const [ask, setAsk] = useState([]);

  let { coin } = useParams();

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws');

    const msg = {
      method: 'SUBSCRIBE',
      params: [`${coin.toLowerCase()}@depth20@1000ms`],
      id: 1,
    };

    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      let x = JSON.parse(event.data);

      if (x.bids !== undefined) {
        setBids(x.bids);
        setAsk(x.asks);
      }
    };

    return () => {
      ws.close();
    };
  }, [coin]);

  return (
    <>
      <div className='flex flex-col h-full'>
        <div className='w-full bg-main h-1/2'>
          <div className='bg-third'>
            <h1 className='px-3 py-2 text-white'>Orderbook</h1>
          </div>
          <table className='w-full table-fixed'>
            <thead className='text-xs border-t border-b border-opacity-25 text-info border-info bg-third'>
              <tr>
                <th className='w-4/12 py-1 pl-2 font-medium text-left'>
                  Price
                </th>
                <th className='w-4/12 py-1 font-medium text-right'>Amount</th>
                <th className='w-4/12 py-1 pr-2 font-medium text-right'>Sum</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='pl-2 text-xs text-left text-danger'>
                      {parseFloat(item[0]).toFixed(6)}
                    </td>
                    <td className='text-xs text-right text-info'>
                      {parseFloat(item[1]).toFixed(2)}
                    </td>
                    <td className='pr-2 text-xs text-right text-info'>
                      {(
                        parseFloat(item[0]).toFixed(6) *
                        parseFloat(item[1]).toFixed(2)
                      ).toFixed(4)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='w-full bg-main h-1/2'>
          <div className='bg-third'>
            <h1 className='px-3 py-2 text-white'>
              {ask.length > 0 && parseFloat(ask[0][0]).toFixed(4)} ≈{' '}
              {ask.length > 0 && parseFloat(ask[0][0]).toFixed(2)}
            </h1>
          </div>
          <table className='w-full table-fixed'>
            <tbody>
              {ask.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='pl-2 text-xs text-left text-success'>
                      {parseFloat(item[0]).toFixed(6)}
                    </td>
                    <td className='text-xs text-right text-info'>
                      {parseFloat(item[1]).toFixed(2)}
                    </td>
                    <td className='pr-2 text-xs text-right text-info'>
                      {(
                        parseFloat(item[0]).toFixed(6) *
                        parseFloat(item[1]).toFixed(2)
                      ).toFixed(4)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orderbook;
