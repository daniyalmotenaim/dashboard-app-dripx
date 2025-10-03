import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { useMemo } from "react";
import conditionData from "../../data.json";

export default function ConditionChart() {
  const { series, labels } = useMemo(() => {
    // Get data from by_condition and count items in each condition array
    const data = Object.entries(conditionData.by_condition)
      .filter(([condition]) => condition !== "...") // Remove the "..." placeholder
      .map(([condition, items]) => ({
        condition: condition,
        label: {
          "5.0": "5",
          "6.0": "6",
          "7.0": "7",
          "7.5": "7.5",
          "8.0": "8",
          "9.0": "9",
          "10.0": "10"
        }[condition] || condition,
        count: Array.isArray(items) ? items.length : 0
      }))
      .sort((a, b) => parseFloat(b.condition) - parseFloat(a.condition));

    return {
      series: data.map(item => item.count),
      labels: data.map(item => `${item.label} (${item.count})`)
    };
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'donut'
    },
    labels,
    colors: ["#41EAD4", "#FBFF12", "#FF206E", "#593F62", "#4C5760", "#8789C0","FFC09F"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Outfit, sans-serif",
    },
    plotOptions: {
      pie: {
         customScale: 1
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "16px",
        fontFamily: "Outfit, sans-serif",
        fontWeight: 300,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-7.5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90 mb-4">
          Shoes by Condition
        </h3>
        <div className="h-[350px] w-full">
          <Chart
            options={options}
            series={series}
            type="donut"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
