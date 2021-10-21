import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CoinInfo = () => {
  let { coin } = useParams();

  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws");

    const msg = {
      method: "SUBSCRIBE",
      params: [`${coin.toLowerCase()}@ticker`],
      id: 1,
    };

    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      let formatResponse = JSON.parse(event.data);

      setCoinData(formatResponse);
    };

    return () => {
      ws.close();
    };
  }, [coin]);

  return (
    <div className="flex flex-col lg:flex-row h-36 lg:h-12 py-2 px-4 bg-third items-center lg:space-x-4">
      <span className="text-xl text-white">{coinData.s}</span>
      <div className="flex flex-1 flex-col">
        <span className="text-info text-base">
          {parseFloat(coinData.c).toFixed(4)}
        </span>
        <span className="text-info text-xs">
          ≈ {parseFloat(coinData.c).toFixed(2)}
        </span>
      </div>
      <div className="flex flex-shrink space-x-4">
        <div className="flex flex-col text-center lg:text-right">
          <span className="text-info text-sm">Change</span>
          <span
            className={`text-xs ${
              coinData.P > 0 ? "text-success" : "text-danger"
            }`}
          >
            {coinData.P > 0 && "+"}
            {coinData.P}
          </span>
        </div>
        <div className="flex flex-col text-center lg:text-right">
          <span className="text-info text-sm">High</span>
          <span className="text-white text-xs">
            {parseFloat(coinData.h).toFixed(4)}
          </span>
        </div>
        <div className="flex flex-col text-center lg:text-right">
          <span className="text-info text-sm">Low</span>
          <span className="text-white text-xs">
            {parseFloat(coinData.l).toFixed(4)}
          </span>
        </div>
        <div className="flex flex-col text-center lg:text-right">
          <span className="text-info text-sm">24H Vol</span>
          <span className="text-white text-xs">
            {parseFloat(coinData.v).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
