import { useParams } from 'react-router';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Tradingview = () => {
  let { coin } = useParams();

  return (
    <TradingViewWidget
      symbol={`BINANCE:${coin}`}
      theme={Themes.DARK}
      autosize
      hide_top_toolbar
      withdateranges
    />
  );
};

export default Tradingview;
