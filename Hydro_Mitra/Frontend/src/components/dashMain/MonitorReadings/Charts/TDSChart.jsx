import React, {useEffect, useState } from "react";
import Chart from "react-apexcharts";

function TDSChart({ Chartdata }) {
  const [data, setData] = useState({
    series: [
      {
        name: "TDS",
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
          gradientToColors: ["#FF66CC"],
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
        colors: ["#FF33A1"], // Hot Pink

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
    if (Chartdata.TDS) {
      const values = Chartdata.TDS.map((it) => parseFloat(it.value).toFixed(2));

      const time = Chartdata.TDS.map((it) => it.timestamp);

      // console.log(values);
      // console.log(time);

      setData((data) => ({
        ...data,
        series: [
          {
            name: "TDS",
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
  },[Chartdata.TDS]);

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    ></Chart>
  );
}

export default TDSChart;

