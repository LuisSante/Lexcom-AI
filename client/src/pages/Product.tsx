import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/product/tv/region_data');
        setData(response.data);
        setLoading(false);
        setError(null);
      } 
      
      catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    // Realizar la primera solicitud al montar el componente
    fetchData();

    // Establecer un intervalo para realizar la solicitud cada 10 segundos
    const interval = setInterval(() => {
      fetchData();
    }, 10000); // 10000 milisegundos = 10 segundos

    // Limpiar el intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Product;
