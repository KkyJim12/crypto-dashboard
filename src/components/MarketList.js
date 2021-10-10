import RightOutlined from "@ant-design/icons/RightOutlined";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import StarOulined from "@ant-design/icons/StarOutlined";

const MarketList = () => {
  return (
    <>
      <div className="bg-main h-full">
        <div className="px-4 pt-2 border-b border-info border-opacity-25 bg-third">
          <div>
            <div className="absolute ml-2 text-info">
              <SearchOutlined />
            </div>
            <input
              className="bg-third border border-minor text-white placeholder-minor p-1 hover:border-orange focus:border-orange outline-none text-sm pl-7"
              type="text"
              placeholder="Search"
            ></input>
          </div>
          <div className="pt-2 flex">
            <ul className="flex lg:space-x-5 text-info text-sm">
              <li className=" border-b-2 border-main hover:border-orange pb-2">
                <a href="/">Favorite</a>
              </li>
              <li className=" border-b-2 border-main hover:border-orange pb-2">
                <a href="/">ETF</a>
              </li>
              <li className=" border-b-2 border-main hover:border-orange pb-2">
                <a href="/">USDT</a>
              </li>
              <li className=" border-b-2 border-main hover:border-orange pb-2">
                <a href="/">BTC</a>
              </li>
              <li className=" border-b-2 border-main hover:border-orange pb-2">
                <a href="/">ETH</a>
              </li>
            </ul>
            <span className="text-minor flex items-center ml-auto pb-2">
              <RightOutlined />
            </span>
          </div>
        </div>
        <div>
          <table className="table-fixed w-full">
            <thead className="text-info text-xs border-b border-info border-opacity-25">
              <tr>
                <th className="w-1/12"></th>
                <th className="font-medium w-4/12 text-left py-1">Markets</th>
                <th className="font-medium w-4/12 py-1 text-right">Price</th>
                <th className="font-medium w-3/12 py-1">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="">
                  <div className="flex items-center justify-end text-info text-sm mr-1">
                    <StarOulined />
                  </div>
                </td>
                <td className="text-left text-white text-sm py-1">ETH</td>
                <td className="text-right text-success text-xs py-1">
                  1.00000000
                </td>
                <td className="text-center text-success text-xs py-1">+3.5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MarketList;
