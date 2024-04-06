/* eslint-disable react/prop-types */
import { AreaChart } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 23',
    Turbidez: 3.0,
  },
  {
    date: 'Feb 23',
    Turbidez: 2.3,
  },
  {
    date: 'Mar 23',
    Turbidez: 1.4,
  },
  {
    date: 'Apr 23',
    Turbidez: 1.92,
  },
  {
    date: 'May 23',
    Turbidez: 1.32,
  },
  {
    date: 'Jun 23',
    Turbidez: 1.43,
  },
];

export function GraficaTur() {
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.dataKey}</p>
              <p className="font-medium text-tremor-content-emphasis">
                {category.value} gotas
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Average BPM</h3>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        categories={['Turbidez']}
        colors={['rose']}
        yAxisWidth={30}
        customTooltip={customTooltip}
      />
    </>
  );
}