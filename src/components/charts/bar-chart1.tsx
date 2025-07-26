import React, { useRef, useEffect, useState } from 'react';

import { chartColors } from './chartjs-config';
import {
  Chart, BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend,
} from 'chart.js';
// import 'chartjs-adapter-moment';

// Import utilities
import { formatValue } from '../../utils';
import { useThemeProvider } from '../../context/theme';

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Tooltip, Legend);

function BarChart01({
  data,
  width,
  height
}: any) {

  const [chart, setChart] = useState<any>(null)
  const canvas = useRef<any>(null);
  const legend = useRef<any>(null);
  const { currentTheme } = useThemeProvider();
  const darkMode = currentTheme === 'dark';
  const { textColor, gridColor, tooltipBodyColor, tooltipBgColor, tooltipBorderColor } = chartColors;

  useEffect(() => {
    const ctx: any = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const newChart: any = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 5,
              callback: (value: any) => value,
              color: darkMode ? textColor.dark : textColor.light,
            },
            grid: {
              color: darkMode ? gridColor.dark : gridColor.light,
            },
          },
          x: {
            // Change from time scale to category scale
            type: 'category',
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              color: darkMode ? textColor.dark : textColor.light,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context: any) => context.parsed.y,
            } as any,
            bodyColor: darkMode ? tooltipBodyColor.dark : tooltipBodyColor.light,
            backgroundColor: darkMode ? tooltipBgColor.dark : tooltipBgColor.light,
            borderColor: darkMode ? tooltipBorderColor.dark : tooltipBorderColor.light,
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [
        {
          id: 'htmlLegend',
          afterUpdate(c: any, _args, _options) {
            const ul = legend.current;
            if (!ul) return;
            // Remove old legend items
            while (ul.firstChild) {
              ul.firstChild.remove();
            }
            // Reuse the built-in legendItems generator
            const items = c.options.plugins.legend.labels.generateLabels(c);
            items.forEach((item: any) => {
              const li = document.createElement('li');
              li.style.display = 'inline-flex';
              li.style.alignItems = 'center';
              li.style.marginRight = '16px';
              
              // Color indicator
              const box = document.createElement('span');
              box.style.display = 'block';
              box.style.width = '12px';
              box.style.height = '12px';
              box.style.borderRadius = '3px';
              box.style.marginRight = '8px';
              box.style.backgroundColor = item.fillStyle;
              box.style.pointerEvents = 'none';
              
              // Value container
              const valueContainer = document.createElement('div');
              valueContainer.style.display = 'flex';
              valueContainer.style.flexDirection = 'column';
              
              // Value
              const value = document.createElement('span');
              value.style.fontSize = '16px';
              value.style.fontWeight = '600';
              value.style.color = darkMode ? '#F3F4F6' : '#111827'; // Light/dark text color
              value.style.lineHeight = '1.25';
              
              // Label
              const label = document.createElement('span');
              label.style.fontSize = '12px';
              label.style.color = darkMode ? '#9CA3AF' : '#6B7280'; // Light/dark muted color
              label.style.lineHeight = '1.25';
              
              // Calculate and format the value
              const theValue = c.data.datasets[item.datasetIndex].data.reduce((a: any, b: any) => a + b, 0);
              const formattedValue = item.text === 'Hours Worked' 
                ? theValue.toFixed(1) // Show 1 decimal for hours
                : Math.round(theValue); // Round days to whole number
              
              value.textContent = "";
              label.textContent = item.text;
              
              // Append elements
              valueContainer.appendChild(value);
              valueContainer.appendChild(label);
              li.appendChild(box);
              li.appendChild(valueContainer);
              ul.appendChild(li);
            });
          },
        },
      ],
    });
    setChart(newChart);
    return () => newChart.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!chart) return;
  
    if (darkMode) {
      chart.options.scales.x.ticks.color = textColor.dark;
      chart.options.scales.y.ticks.color = textColor.dark;
      chart.options.scales.y.grid.color = gridColor.dark;
      chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.dark;
      chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.dark;
      chart.options.plugins.tooltip.borderColor = tooltipBorderColor.dark;
    } else {
      chart.options.scales.x.ticks.color = textColor.light;
      chart.options.scales.y.ticks.color = textColor.light;
      chart.options.scales.y.grid.color = gridColor.light;
      chart.options.plugins.tooltip.bodyColor = tooltipBodyColor.light;
      chart.options.plugins.tooltip.backgroundColor = tooltipBgColor.light;
      chart.options.plugins.tooltip.borderColor = tooltipBorderColor.light;
    }
    chart.update('none');
  }, [currentTheme]);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <ul ref={legend} className="flex flex-wrap gap-x-4"></ul>
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart01;
