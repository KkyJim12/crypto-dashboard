import { useState, useEffect } from "react";
import { useParams } from "react-router";
import MenuUnfoldOutlined from "@ant-design/icons/MenuUnfoldOutlined";
import PlusSquareOutlined from "@ant-design/icons/PlusSquareOutlined";
import MinusSquareOutlined from "@ant-design/icons/MinusSquareOutlined";
import { isMobile } from "react-device-detect";

const Orderbook = () => {
  const [bids, setBids] = useState([]);
  const [ask, setAsk] = useState([]);
  const [list, setList] = useState("bidAndask");
  const [decimal, setDecimal] = useState(4);
  const restRow = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ];

  let { coin } = useParams();

  const changeList = (format) => {
    setList(format);
  };

  const changeDecimal = (method) => {
    if (method === "plus" && decimal < 4) {
      setDecimal(decimal + 2);
    }

    if (method === "minus" && decimal > 0) {
      setDecimal(decimal - 2);
    }
  };

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws");

    const msg = {
      method: "SUBSCRIBE",
      params: [`${coin.toLowerCase()}@depth20@1000ms`],
      id: 1,
    };

    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      let x = JSON.parse(event.data);
      if (x.bids !== undefined) {
        // Find bids max Volume

        for (let i = 0; i < x.bids.length; i++) {
          x.bids[i].sum = x.bids[i][0] * x.bids[i][1];
        }

        let bidsMaxVolume = 0;

        for (let k = 0; k < x.bids.length; k++) {
          bidsMaxVolume = bidsMaxVolume + parseFloat(x.bids[k].sum);
        }

        for (let l = 0; l < x.bids.length; l++) {
          x.bids[l].percent = Math.round((x.bids[l].sum / bidsMaxVolume) * 100);
        }

        // Find asks max volume

        for (let j = 0; j < x.asks.length; j++) {
          x.asks[j].sum = x.asks[j][0] * x.asks[j][1];
        }

        let asksMaxVolume = 0;

        for (let m = 0; m < x.asks.length; m++) {
          asksMaxVolume = asksMaxVolume + parseFloat(x.bids[m].sum);
        }

        for (let n = 0; n < x.asks.length; n++) {
          x.asks[n].percent = Math.round((x.asks[n].sum / asksMaxVolume) * 100);
        }

        x.asks.sort((a, b) => b[0] - a[0]);

        setBids(x.bids);
        setAsk(x.asks);
      }
    };

    return () => {
      ws.close();
    };
  }, [coin]);

  const bidAndAskFormat = (
    <>
      <div className="w-full bg-main h-1/2">
        <table className="w-full table-fixed">
          <thead className="text-xs border-t border-b border-opacity-25 text-info border-info bg-third">
            <tr>
              <th className="w-4/12 py-1 pl-2 font-medium text-left">Price</th>
              <th className="w-4/12 py-1 font-medium text-right">Amount</th>
              <th className="w-4/12 py-1 pr-2 font-medium text-right">Sum</th>
            </tr>
          </thead>
          <tbody>
            {ask.map((item, index) => {
              return (
                <tr
                  className={`${isMobile ? "bg-fixed" : "bg-local"}`}
                  key={index}
                  style={{
                    backgroundImage: `linear-gradient(to right, #382a38 ${item.percent}%, #1d2635 0%`,
                  }}
                >
                  <td className="pl-2 text-xs text-left text-danger">
                    {parseFloat(item[0]).toFixed(decimal)}
                  </td>
                  <td className="text-xs text-right text-info">
                    {parseFloat(item[1]).toFixed(2)}
                  </td>
                  <td className="pr-2 text-xs text-right text-info">
                    {parseFloat(item.sum).toFixed(4)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="w-full bg-main h-1/2">
        <div className="bg-third flex items-center px-3 py-2">
          <div className="flex flex-1">
            <h1 className="text-white">
              {ask.length > 0 && parseFloat(ask[19][0]).toFixed(4)} ≈{" "}
              {ask.length > 0 && parseFloat(ask[19][0]).toFixed(2)}
            </h1>
          </div>
          <div className="flex flex-shrink items-center space-x-2 lg:space-x-1">
            <span className="text-white text-xs">{decimal}</span>
            <div className="mb-2">
              <button
                onClick={() => changeDecimal("plus")}
                className="text-info cursor-pointer"
              >
                <PlusSquareOutlined />
              </button>
              <button
                onClick={() => changeDecimal("minus")}
                className="text-info cursor-pointer"
              >
                <MinusSquareOutlined />
              </button>
            </div>
          </div>
        </div>
        <table className="w-full table-fixed">
          <tbody>
            {bids.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`${isMobile ? "bg-fixed" : "bg-local"}`}
                  style={{
                    backgroundImage: `linear-gradient(to right, #253a3a ${item.percent}%, #1d2635 0%`,
                  }}
                >
                  <td className="pl-2 text-xs text-left text-success">
                    {parseFloat(item[0]).toFixed(decimal)}
                  </td>
                  <td className="text-xs text-right text-info">
                    {parseFloat(item[1]).toFixed(2)}
                  </td>
                  <td className="pr-2 text-xs text-right text-info">
                    {parseFloat(item.sum).toFixed(4)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );

  const bidFormat = (
    <div className="w-full bg-main h-full">
      <table className="w-full table-fixed">
        <thead className="text-xs border-t border-b border-opacity-25 text-info border-info bg-third">
          <tr>
            <th className="w-4/12 py-1 pl-2 font-medium text-left">Price</th>
            <th className="w-4/12 py-1 font-medium text-right">Amount</th>
            <th className="w-4/12 py-1 pr-2 font-medium text-right">Sum</th>
          </tr>
        </thead>
        <tbody>
          {ask.map((item, index) => {
            return (
              <tr
                key={index}
                className={`${isMobile ? "bg-fixed" : "bg-local"}`}
                style={{
                  backgroundImage: `linear-gradient(to right, #382a38 ${item.percent}%, #1d2635 0%`,
                }}
              >
                <td className="pl-2 text-xs text-left text-danger">
                  {parseFloat(item[0]).toFixed(decimal)}
                </td>
                <td className="text-xs text-right text-info">
                  {parseFloat(item[1]).toFixed(2)}
                </td>
                <td className="pr-2 text-xs text-right text-info">
                  {parseFloat(item.sum).toFixed(4)}
                </td>
              </tr>
            );
          })}
          {restRow.map((item, index) => {
            return (
              <tr key={index}>
                <td className="pl-2 text-xs text-left text-danger">--</td>
                <td className="text-xs text-right text-danger">--</td>
                <td className="pr-2 text-xs text-right text-danger">--</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg-third flex items-center px-3 py-2">
        <div className="flex flex-1">
          <h1 className="text-white">
            {ask.length > 0 && parseFloat(ask[19][0]).toFixed(4)} ≈{" "}
            {ask.length > 0 && parseFloat(ask[19][0]).toFixed(2)}
          </h1>
        </div>
        <div className="flex flex-shrink items-center space-x-2 lg:space-x-1">
          <span className="text-white text-xs">{decimal}</span>
          <div className="mb-2">
            <button
              onClick={() => changeDecimal("plus")}
              className="text-info cursor-pointer"
            >
              <PlusSquareOutlined />
            </button>
            <button
              onClick={() => changeDecimal("minus")}
              className="text-info cursor-pointer"
            >
              <MinusSquareOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const askFormat = (
    <div className="w-full bg-main h-full">
      <table className="w-full table-fixed">
        <thead className="text-xs border-t border-b border-opacity-25 text-info border-info bg-third">
          <tr>
            <th className="w-4/12 py-1 pl-2 font-medium text-left">Price</th>
            <th className="w-4/12 py-1 font-medium text-right">Amount</th>
            <th className="w-4/12 py-1 pr-2 font-medium text-right">Sum</th>
          </tr>
        </thead>
      </table>
      <div className="bg-third flex items-center px-3 py-2">
        <div className="flex flex-1">
          <h1 className="text-white">
            {ask.length > 0 && parseFloat(ask[19][0]).toFixed(4)} ≈{" "}
            {ask.length > 0 && parseFloat(ask[19][0]).toFixed(2)}
          </h1>
        </div>
        <div className="flex flex-shrink items-center space-x-2 lg:space-x-1">
          <span className="text-white text-xs">{decimal}</span>
          <div className="mb-2">
            <button
              onClick={() => changeDecimal("plus")}
              className="text-info cursor-pointer"
            >
              <PlusSquareOutlined />
            </button>
            <button
              onClick={() => changeDecimal("minus")}
              className="text-info cursor-pointer"
            >
              <MinusSquareOutlined />
            </button>
          </div>
        </div>
      </div>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="w-4/12 py-1 pl-2 font-medium text-left"></th>
            <th className="w-4/12 py-1 font-medium text-right"></th>
            <th className="w-4/12 py-1 pr-2 font-medium text-right"></th>
          </tr>
        </thead>
        <tbody>
          {bids.map((item, index) => {
            return (
              <tr
                key={index}
                className={`${isMobile ? "bg-fixed" : "bg-local"}`}
                style={{
                  backgroundImage: `linear-gradient(to right, #253a3a ${item.percent}%, #1d2635 0%`,
                }}
              >
                <td className="pl-2 text-xs text-left text-success">
                  {parseFloat(item[0]).toFixed(decimal)}
                </td>
                <td className="text-xs text-right text-info">
                  {parseFloat(item[1]).toFixed(2)}
                </td>
                <td className="pr-2 text-xs text-right text-info">
                  {(
                    parseFloat(item[0]).toFixed(6) *
                    parseFloat(item[1]).toFixed(2)
                  ).toFixed(4)}
                </td>
              </tr>
            );
          })}
          {restRow.map((item, index) => {
            return (
              <tr key={index}>
                <td className="pl-2 text-xs text-left text-success">--</td>
                <td className="text-xs text-right text-success">--</td>
                <td className="pr-2 text-xs text-right text-success">--</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="bg-third flex items-center px-3 py-2">
          <h1 className=" text-white">Orderbook</h1>
          <div className="flex ml-auto space-x-2 lg:space-x-4">
            <button
              onClick={() => changeList("bidAndask")}
              className="flex transform text-info text-sm"
            >
              <MenuUnfoldOutlined />
            </button>
            <button
              onClick={() => changeList("bid")}
              className="flex transform rotate-90 text-info text-sm"
            >
              <MenuUnfoldOutlined />
            </button>
            <button
              onClick={() => changeList("ask")}
              className="flex transform rotate-270 text-info text-sm"
            >
              <MenuUnfoldOutlined />
            </button>
          </div>
        </div>
        {list === "bidAndask"
          ? bidAndAskFormat
          : list === "bid"
          ? bidFormat
          : askFormat}
      </div>
    </>
  );
};

export default Orderbook;
