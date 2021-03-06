import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useParams } from 'react-router';

const VolumeChart = () => {
  let { coin } = useParams();
  const [bids, setBids] = useState([]);
  const [ask, setAsk] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${coin.toLowerCase()}@50`
    );

    const msg = {
      method: 'SUBSCRIBE',
      params: [`${coin.toLowerCase()}@depth`],
      id: 1,
    };

    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = (event) => {
      let x = JSON.parse(event.data);
      console.log(x);

      if (x.b !== undefined) {
        for (let i = 0; i < x.b.length; i++) {
          x.b[i][0] = parseFloat(x.b[i][0]);
          x.b[i][1] = parseFloat(x.b[i][1]);
        }

        for (let j = 0; j < x.a.length; j++) {
          x.a[j][0] = parseFloat(x.a[j][0]);
          x.a[j][1] = parseFloat(x.a[j][1]);
        }

        setBids(x.b);
        setAsk(x.a);
      }
    };

    return () => {
      ws.close();
    };
  }, [coin]);

  const option = {
    chart: {
      backgroundColor: '#192531',
      type: 'area',
      zoomType: 'xy',
    },
    title: {
      style: {
        color: 'white',
      },
      text: `${coin} Market Depth`,
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
      title: {
        text: 'Price',
        style: {
          color: 'white',
        },
      },
      labels: {
        style: {
          color: 'white',
        },
      },
    },
    yAxis: [
      {
        lineWidth: 1,
        gridLineWidth: 1,
        title: null,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: 'inside',
        labels: {
          align: 'left',
          x: 8,
          style: {
            color: 'white',
          },
        },
      },
      {
        opposite: true,
        linkedTo: 0,
        lineWidth: 1,
        gridLineWidth: 0,
        title: null,
        tickWidth: 1,
        tickLength: 5,
        tickPosition: 'inside',
        labels: {
          align: 'right',
          x: -8,
          style: {
            color: 'white',
          },
        },
      },
    ],
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillOpacity: 0.2,
        lineWidth: 1,
        step: 'center',
      },
    },
    tooltip: {
      headerFormat:
        '<span style="font-size=10px;">Price: {point.key}</span><br/>',
      valueDecimals: 2,
    },
    series: [
      {
        name: 'Bids',
        data: bids,
        color: '#227b5f',
      },
      {
        name: 'Asks',
        data: ask,
        color: '#a3404d',
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  );
};

export default VolumeChart;
