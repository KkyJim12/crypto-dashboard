import RightOutlined from "@ant-design/icons/RightOutlined";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import MenuUnfoldOutlined from "@ant-design/icons/MenuUnfoldOutlined";
import StarOulined from "@ant-design/icons/StarOutlined";

const MarketList = (props) => {
  const data = props.data;
  const sideMenu = props.sideMenu;
  const changeSideMenu = props.changeSideMenu;

  const largeSideMenu = (
    <div className="bg-main">
      <div className="px-4 pt-2 border-b border-info border-opacity-25 bg-third">
        <div className="flex">
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
          <div className="ml-auto">
            <button onClick={changeSideMenu} className="text-info">
              <MenuUnfoldOutlined />
            </button>
          </div>
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
      <div className="overflow-y-scroll" style={{ height: "80vh" }}>
        <table className="table-fixed w-full">
          <thead className="text-info text-xs border-b border-info border-opacity-25">
            <tr>
              <th className="w-2/12"></th>
              <th className="font-medium w-3/12 text-left py-1">Markets</th>
              <th className="font-medium w-4/12 py-1 text-right">Price</th>
              <th className="font-medium w-3/12 py-1 text-right">Change</th>
              <th className="font-medium w-1/12 py-1"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.id} className="">
                  <td className="">
                    <div className="flex items-center justify-end text-info text-sm mr-1">
                      <StarOulined />
                    </div>
                  </td>
                  <td className="text-left text-white text-sm py-1">
                    {item.symbol}
                  </td>
                  <td
                    className={`text-right text-xs py-1 ${
                      item.quote.USD.percent_change_24h > 0
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {item.quote.USD.price.toFixed(4)}
                  </td>
                  <td
                    className={`text-right text-xs py-1 ${
                      item.quote.USD.percent_change_24h > 0
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {item.quote.USD.percent_change_24h > 0 && "+"}
                    {item.quote.USD.percent_change_24h.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const smallSideMenu = (
    <div className="flex flex-col">
      <div className="flex justify-end px-2 py-1 bg-third">
        <button className="text-info" onClick={changeSideMenu}>
          <MenuUnfoldOutlined />
        </button>
      </div>
      <div className="text-center bg-third text-white text-base py-1">USD</div>
      <div className="text-center bg-main text-info text-sm border-t border-b border-info border-opacity-25 py-1">
        Market
      </div>
      <div className="flex flex-col overflow-y-scroll" style={{ height: "80vh" }}>
        {data.map((item, index) => {
          return (
            <a href="/">
              <div className="text-center text-white py-1  text-xs hover:bg-third">
                {item.symbol}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );

  return <>{sideMenu ? largeSideMenu : smallSideMenu}</>;
};

export default MarketList;
