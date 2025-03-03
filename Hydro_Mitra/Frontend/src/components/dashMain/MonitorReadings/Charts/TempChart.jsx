import React, {useEffect, useState } from "react";
import Chart from "react-apexcharts";

function TempChart({ Chartdata }) {
  const [data, setData] = useState({
    series: [
      {
        name: "Temperature",
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
          gradientToColors: ["#66FFFF"],
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
        colors: ["#33FFF9"], // Aqua Blue

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
    if (Chartdata.Temperature) {
      const values = Chartdata.Temperature.map((it) => parseFloat(it.value).toFixed(2));

      const time = Chartdata.Temperature.map((it) => it.timestamp);

      // console.log(values);
      // console.log(time);

      setData((data) => ({
        ...data,
        series: [
          {
            name: "Temperature",
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
  },[Chartdata.Temperature]);


  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    ></Chart>
  );
}

export default TempChart;

