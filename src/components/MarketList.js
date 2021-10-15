import RightOutlined from '@ant-design/icons/RightOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import StarOulined from '@ant-design/icons/StarOutlined';

const MarketList = (props) => {
  const data = props.data.filter((i) => i.s.includes('USDT'));
  const sortData = [...data].sort((a, b) => (a.s > b.s ? 1 : -1));
  const sideMenu = props.sideMenu;
  const changeSideMenu = props.changeSideMenu;

  const largeSideMenu = (
    <div className='bg-main'>
      <div className='px-4 pt-2 border-b border-opacity-25 border-info bg-third'>
        <div className='flex'>
          <div>
            <div className='absolute ml-2 text-info'>
              <SearchOutlined />
            </div>
            <input
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
            <li className='pb-2 border-b-2 border-main hover:border-orange'>
              <a href='/'>Favorite</a>
            </li>
            <li className='pb-2 border-b-2 border-main hover:border-orange'>
              <a href='/'>ETF</a>
            </li>
            <li className='pb-2 border-b-2 border-main hover:border-orange'>
              <a href='/'>USDT</a>
            </li>
            <li className='pb-2 border-b-2 border-main hover:border-orange'>
              <a href='/'>BTC</a>
            </li>
            <li className='pb-2 border-b-2 border-main hover:border-orange'>
              <a href='/'>ETH</a>
            </li>
          </ul>
          <span className='flex items-center pb-2 ml-auto text-minor'>
            <RightOutlined />
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
            {sortData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className='flex items-center justify-end mr-1 text-sm text-info'>
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
      <div className='py-1 text-base text-center text-white bg-third'>USD</div>
      <div className='py-1 text-sm text-center border-t border-b border-opacity-25 bg-main text-info border-info'>
        Market
      </div>
      <div
        className='flex flex-col overflow-y-scroll'
        style={{ height: '80vh' }}
      >
        {data.map((item, index) => {
          return (
            <a key={item.s} href='/'>
              <div className='py-1 text-xs text-center text-white hover:bg-third'>
                {item.s}
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
