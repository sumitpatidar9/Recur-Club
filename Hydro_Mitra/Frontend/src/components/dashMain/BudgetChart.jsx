import React, { useEffect } from "react";
import * as echarts from "echarts";

function BudgetChart() {
  useEffect(() => {
    const chart = echarts.init(document.querySelector("#budgetChart"));
    chart.setOption({
      legend: { data: ["Allocated Budget", "Actual Spending"] },
      radar: {
        shape: "circle",
        indicator: [
          { name: "sensers", max: 6500 },
          { name: "Dailt test", max: 16000 },
          { name: "salary ", max: 30000 },
          { name: "Customer Support", max: 38000 },
          { name: "Development", max: 52000 },
          { name: "Maintaince", max: 42000 }, // Changed "marketing" to "Marketing"
        ],
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",
          data: [
            {
              value: [4200, 5000,9000, 10000, 8500, 3500],
              name: "Allocated Budget",
            },
            {
              value: [5000, 2000, 10000, 2000, 8200, 6200],
              name: "Actual Spending", // Changed "Actual Spend" to "Actual Spending"
            },
          ],
        },
      ],
    });
  }, []);
  return (
    <div
      id="budgetChart"
      style={{ minHeight: "400px" }}
      className="echart"
    ></div>
  );
}

export default BudgetChart;
