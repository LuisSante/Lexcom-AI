import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";


interface RegionData {
  geo: string;
  location: string;
  value: number;
}

interface TypeRegion {
  searchValue: string;
}

const Region: React.FC<TypeRegion> = ({ searchValue }) => {
  const [data, setData] = useState<RegionData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/api/v1/product/${searchValue}/region_data`
        const response: AxiosResponse<RegionData[]> = await axios.get(url)
        setData(response.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div>
      {data && (
        <div>
          <select>
            {data.map((item, index) => (
              <option key={index} value={item.location}>
                {item.location}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Region;
