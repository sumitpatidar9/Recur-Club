import React, {useEffect, useState } from "react";
import Chart from "react-apexcharts";

function WaterLevChart({ Chartdata }) {
  const [data, setData] = useState({
    series: [
      {
        name: "WaterLevel",
        data: [],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
        colors: ["#2eca6a"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          gradientToColors: ["#B366FF"],
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#8D33FF"], // Deep Violet

      },
      xaxis: {
        type: "datetime",
        categories: [ ],
       
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  useEffect(() => {
    if (Chartdata.WaterLevel) {
      const values = Chartdata.WaterLevel.map((it) => parseFloat(it.value).toFixed(2));

      const time = Chartdata.WaterLevel.map((it) => it.timestamp);

      // console.log(values);
      // console.log(time);

      setData((data) => ({
        ...data,
        series: [
          {
            name: "Ph",
            data: values,
          },
        ],
        options:{
          ...data.options,
        xaxis: {
          type: "datetime",
          categories: time,
        },
      }
      }));
    }
  },[Chartdata.WaterLevel]);

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    ></Chart>
  );
}

export default WaterLevChart;

