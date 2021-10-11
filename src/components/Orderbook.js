const Orderbook = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="bg-main w-full h-1/2">
          <div className="bg-third">
            <h1 className="text-white py-2 px-3">Orderbook</h1>
          </div>
          <table className="table-fixed w-full">
            <thead className="text-info text-xs border-b border-t border-info border-opacity-25 bg-third">
              <tr>
                <th className="font-medium w-4/12 text-left py-1 pl-2">
                  Price (USDT)
                </th>
                <th className="font-medium w-4/12 py-1 text-right">
                  Amount (BTC)
                </th>
                <th className="font-medium w-4/12 py-1 pr-2 text-right">
                  Sum(BTC)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-danger text-left text-xs pl-2">
                  56648.6897
                </td>
                <td className="text-info text-right text-xs">0.521002</td>
                <td className="text-info text-right text-xs pr-2">1.25</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-main w-full h-1/2">
          <div className="bg-third">
            <h1 className="text-white py-2 px-3">56672.7646 ≈ $56689.77</h1>
          </div>
          <table className="table-fixed w-full">
            <tbody>
              <tr>
                <td className="text-success text-left text-xs pl-2">
                  56648.6897
                </td>
                <td className="text-info text-right text-xs">0.521002</td>
                <td className="text-info text-right text-xs pr-2">1.25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orderbook;
