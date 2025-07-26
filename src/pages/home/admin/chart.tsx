// Import utilities
import BarChart01 from "../../../components/charts/bar-chart1";
import { getCssVariable } from "../../../utils";
import { useAdminContext } from "../../../context/admin";
import { useEffect, useState } from "react";
import AppLoader from "../../../components/loader";

function StatsChart() {
  const { topPerformers, getTopPerformers, fetchingTopPeformers } = useAdminContext();
  const [timePeriod, setTimePeriod] = useState<"day" | "week" | "month" | "all">("all");
  const [chartData, setChartData] = useState<any>()

  useEffect(() => {
    getTopPerformers(timePeriod)
  }, [timePeriod]);

  useEffect(() => {
    if(topPerformers){
      setChartData({
        labels: topPerformers.map((performer) => performer.name),
        datasets: [
          {
            label: "Hours Worked",
            data: topPerformers.map((performer) => performer.totalHours),
            backgroundColor: getCssVariable("--color-violet-500"),
            hoverBackgroundColor: getCssVariable("--color-violet-500"),
            barPercentage: 0.7,
            categoryPercentage: 0.7,
            borderRadius: 4,
          },
          {
            label: "Days Worked",
            data: topPerformers.map((performer) => performer.daysWorked),
            backgroundColor: getCssVariable("--color-violet-800"),
            hoverBackgroundColor: getCssVariable("--color-violet-800"),
            barPercentage: 0.7,
            categoryPercentage: 0.7,
            borderRadius: 4,
          },
        ],
      })
    }
  }, [topPerformers])

  const handlePeriodChange = (period: "day" | "week" | "month" | "all") => {
    setTimePeriod(period);
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex justify-between items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Top Performers
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePeriodChange("day")}
            className={`px-2 py-1 text-xs rounded ${
              timePeriod === "day" ? "bg-violet-700 text-white" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            Today
          </button>
          <button
            onClick={() => handlePeriodChange("week")}
            className={`px-2 py-1 text-xs rounded ${
              timePeriod === "week" ? "bg-violet-700 text-white" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => handlePeriodChange("month")}
            className={`px-2 py-1 text-xs rounded ${
              timePeriod === "month" ? "bg-violet-700 text-white" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            Month
          </button>
          <button
            onClick={() => handlePeriodChange("all")}
            className={`px-2 py-1 text-xs rounded ${
              timePeriod === "all" ? "bg-violet-700 text-white" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            All Time
          </button>
        </div>
      </header>
      
      {fetchingTopPeformers ? (
        <div className="p-20 flex items-center justify-center w-full">
          <AppLoader/>
        </div>
      ) : (
        <>        
          {topPerformers.length > 0 ? (
            <BarChart01
              data={chartData}
              width={595}
              height={248}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (context: any) {
                        return `${context.dataset.label}: ${context.raw} ${
                          context.dataset.label === "Hours Worked"
                            ? "hours"
                            : "days"
                        }`;
                      },
                    },
                  },
                },
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-64">
              <div className="text-gray-500">
                No data available for the selected period
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default StatsChart;
