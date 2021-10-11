const Exchange = () => {
  return (
    <>
      <div className="w-full h-full bg-main">
        <div className="pt-2 bg-third">
          <ul className="flex text-info space-x-6 px-6">
            <li className="text-white border-b-2 border-orange">Limit</li>
            <li>Markets</li>
            <li>Grid Trading</li>
          </ul>
        </div>
        <div className="flex">
          <div className="flex-1 px-6 py-2">
            <div className="flex">
              <p className="text-sm text-info">Buy BTC</p>
              <p className="text-white text-sm ml-auto">0 USDT</p>
            </div>
          </div>
          <div className="flex-1 px-6 py-2">
            <div className="flex">
              <p className="text-sm text-info">Sell BTC</p>
              <p className="text-white text-sm ml-auto">0 BTC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
