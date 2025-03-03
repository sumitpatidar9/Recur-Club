import React, { useEffect, useState } from "react";
import * as echarts from "echarts";

function WebTrafficChart() {
  useEffect(() => {
    echarts.init(document.querySelector("#trafficChart")).setOption({
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      series: [
        {
          name: "Access Form",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLableOverlaps: false,
          lable: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "18",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1408, name: "Search Engine" },
            { value: 152, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Vedio Ads" },
          ],
        },
      ],
    });
  }, []);

  return (
    <>
      <div
        id="trafficChart"
        style={{ minHeight: "400px" }}
        className="echart"
      ></div>
    </>
  );
}

export default WebTrafficChart;
