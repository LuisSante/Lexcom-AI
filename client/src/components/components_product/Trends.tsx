import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';

import Chart from 'chart.js/auto';
import { ChartData } from 'chart.js';

interface ValueData {
  value: string;
}

interface TimelineData {
  date: string;
  values: ValueData[];
}


interface TrendsData {
  timeline_data: TimelineData[];
}

interface TypeTrends {
  searchValue: string;
}


const Trends: React.FC<TypeTrends> = ({ searchValue }) => {
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [{
      label: '',
      data: [],
      fill: false,
      borderColor: '',
      tension: 0
    }]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/api/v1/product/${searchValue}/trends_data`
        const response: AxiosResponse<TrendsData> = await axios.get(url)
        const data = response.data.timeline_data

        const labels = data.map(item => item.date);
        const value = data.map(item => parseInt(item.values[0].value));

        const new_chartData: ChartData<"line"> = {
          labels: labels,
          datasets: [
            {
              label: `Valores de ${searchValue}`,
              data: value,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        };

        setChartData(new_chartData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <>
      <div style={{ height: '400px', width: '600px' }}>
      <Line data={chartData} options={{ scales: { x: { type: 'category' } } }} />
      </div>
    </>
  );
};

export default Trends;
