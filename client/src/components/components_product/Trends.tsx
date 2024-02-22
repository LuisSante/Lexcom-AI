import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

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
  const [data, setData] = useState<TimelineData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/api/v1/product/${searchValue}/trends_data`
        const response: AxiosResponse<TrendsData> = await axios.get(url)
        setData(response.data.timeline_data);
        console.log(response.data)
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
          {data.map((item, index) => (
            <div key={index}>
              <p>{item.date}</p>
              {item.values.map((valueData, valueIndex) => (
                <li key={valueIndex}>
                  <p>Value: {valueData.value}</p>
                </li>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trends;
