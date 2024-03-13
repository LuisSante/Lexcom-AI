import { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';

import Chart from 'chart.js/auto';
import { CategoryScale, ChartData } from 'chart.js';
import axiosInstance from "../axios";
import { notification } from "antd";

Chart.register(CategoryScale);

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
  idRegion: string;
}


const Trends: React.FC<TypeTrends> = ({ searchValue, idRegion }) => {
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
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const url = `product/value=${searchValue}/idregion=${idRegion}/trends_data`;

    if (idRegion) {
      api.success({
        message: 'País identificado',
        description: 'Espere por favor',
        duration: 8,
        placement: 'bottomLeft'
      });

      axiosInstance.get<TrendsData>(url)
        .then(response => {
          const data = response.data.timeline_data;
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
        })
        .catch(err => {
          api.error({
            message: 'Error al buscar paises',
            description: `Por favor, seleccione una país en el desplegable`,
            duration: 4,
            placement: 'bottomLeft'
          });
          api.error({
            message: 'Error al realizar la operación',
            description: `${err.message}`,
            duration: 4,
            placement: 'bottomLeft'
          });
        })
    } else {
      api.error({
        message: 'Por favor, seleccione una país en el desplegable',
        duration: 4,
        placement: 'bottomLeft'
      });
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRegion]);

  return (
    <>
      {contextHolder}
      <div style={{ height: '400px', width: '600px' }}>
        <Line data={chartData} options={{ scales: { x: { type: 'category' } } }} />
      </div>
    </>
  );
};

export default Trends;
