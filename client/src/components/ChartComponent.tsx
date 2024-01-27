import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface ChartProps {
  // Propiedades del gráfico, como datos y opciones, pueden ser pasadas como props
  data: any;
  options?: any;
}

const ChartComponent: React.FC<ChartProps> = ({ data, options }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar', // Tipo de gráfico (puedes personalizar según tus necesidades)
          data: data,
          options: options,
        });
      }
    }
  }, [data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
