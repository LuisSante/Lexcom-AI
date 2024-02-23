import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Select } from 'antd';

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

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <div>
      {data && (
        <div>
          <Select
            showSearch
            placeholder="Selecciona un país"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
          >
            {data.map((item, index) => (
              <Select.Option key={index} value={item.location}>
                {item.location}
              </Select.Option>
            ))}
          </Select>
        </div>
      )}
    </div>
  );
};

export default Region;
