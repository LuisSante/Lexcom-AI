import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Select } from 'antd';
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";


const geoUrl: string = "/features.json";

const colorScale = scaleLinear<string>()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

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

  const [dataR, setDataR] = useState<RegionData[] | null>(null);
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

  useEffect(() => {
    if (data) {
      const maximoValor = Math.max(...data.map(item => item.value));
      const dataActualizado = data.map(item => ({
        ...item,
        value: item.value / maximoValor
      }));
      setDataR(dataActualizado);
    }
  }, [data]);

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
      {data &&dataR && (
        <div>   
          <ComposableMap
            projectionConfig={{
              rotate: [-10, 0, 0],
              scale: 130
            }}
            style={{
              marginTop: "-100px" 
            }}
          >
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} id={""} fill={""} />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            {dataR.length > 0 && (
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const d = dataR.find((s) => s.location === geo.properties.name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={d ? colorScale(d.value ) : "#F5F4F6"}
                      />
                    );
                  })
                }
              </Geographies>
            )}
          </ComposableMap>
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
